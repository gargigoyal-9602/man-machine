import service, { serviceTypes } from "../../services";
import AuthState from "../../redux/states/auth";

export default async function updateProfile(profileDetails, onSuccess, onFailure) {
    try {
        const authState = AuthState.get();
        let serviceType;
        const user = authState.user;

        //auth setter part with optional test data for guest
        if (typeof user === "object") {
            serviceType = serviceTypes.updateProfile(user?.id);
        } else {
            throw new Error("Login data error, try logout and login again.");
        }

        if (serviceType) {
            serviceType.body = profileDetails;
        }

        const { response, error } = await service(serviceType);
        if (error) {
            throw new Error(error.message || "Error occured while updating profile");
        } else if (response) {
            console.log("Received profile data is ", response?.data?.data);
            if (response.data?.success) {
                window.notify([{ message: response.data?.message || "Profile updated successfully", type: "success" }]);
                AuthState.set(response.data.data);
                setTimeout(() => onSuccess(), 500);
            } else {
                throw new Error(response.data?.message || "Error occured while updating profile");
            }
        }

    } catch (error) {
        window.notify([{ message: error.message || "Error occured while updating profile", type: "danger" }]);
        onFailure("Error : "+error.message || "Unknown Error Occured");
    }
}


