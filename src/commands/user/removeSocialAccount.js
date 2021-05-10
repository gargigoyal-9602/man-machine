import service, { serviceTypes } from "../../services";
import AuthState from "../../redux/states/auth";

export default async function removeSocialAccount(connectId, onSuccess) {
    try {
        const authState = AuthState.get();
        let serviceType;
        const user = authState.user;

        //auth setter part with optional test data for guest
        if (typeof user === "object") {
            serviceType = serviceTypes.removeSocialConnects(user?.id, connectId);
        } else {
            throw new Error("Login data error, try logout and login again.");
        }

        const { response, error } = await service(serviceType);
        if (error) {
            //console.log("Received data is ", error.message);
            throw new Error(error.message || "Error occured while disconnecting social account.");
        } else if (response) {
            //console.log("Received data is ", response);
            if (response.data?.success) {
                window.notify([{ message: "Account disconnected successfully", type: "success" }]);
                setTimeout(() => onSuccess(), 500);
            } else {
                throw new Error(response.data?.message || "Error occured while disconnecting social account.");
            }
        }

    } catch (error) {
        window.notify([{ message: error.message || "Error occured while disconnecting social account.", type: "danger" }]);
    }
}