import service, { serviceTypes } from "../../services";
import AuthState from "../../redux/states/auth";

export default async function connectSocialAccount(data, onSuccess, onFailure) {
    try {
        const authState = AuthState.get();
        let serviceType;
        const user = authState.user;

        //auth setter part with optional test data for guest
        if (typeof user === "object") {
            serviceType = serviceTypes.connectSocialAccount(user?.id);
        } else {
            throw new Error("Login data error, try logout and login again.");
        }

        if (serviceType) {
            serviceType.body = data;
        }

        const { response, error } = await service(serviceType);
        if (error) {
            throw new Error(error.message || "Error occured while updating address");
        } else if (response) {
            if (response.data?.success) {
                window.notify([{ message: response.data?.message || "Account connected successfully", type: "success" }]);
                setTimeout(() => onSuccess(), 500);
            } else {
                throw new Error(response.data?.message || "Error occured while connecting account");
            }
        }

    } catch (error) {
        window.notify([{ message: error.message || "Error occured while updating address", type: "danger" }]);
    }
}


