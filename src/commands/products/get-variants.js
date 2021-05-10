import service, { serviceTypes } from "../../services";
import AuthState from "../../redux/states/auth";

export default async function getVariants() {
    try {
        const authState = AuthState.get();
        const user = authState.user;
        let serviceType;

        //auth setter part with optional test data for guest
        if (typeof user === "object") {
            serviceType = serviceTypes.getVariants(user?.id);
        } else {
            throw new Error("Login data error, try logout and login again.");
        }

        const { response, error } = await service(serviceType);
        if (error) {
            throw new Error(error.message || "Error occured in getting variants");
        } else if (response) {
            if (response.data?.success) {
                return response.data?.data;
            } else {
                throw new Error("Error occured in getting variants");
            }
        }

    } catch (error) {
        //window.notify([{ message: error.message || "Error occured in refreshing cache", type: "danger" }]);
        return [];
    }
}


