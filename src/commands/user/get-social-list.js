import service, { serviceTypes } from "../../services";
import UserState from "../../redux/states/user";
import CacheState from "../../redux/states/cache";

export default async function getSocialList(onSuccess, onFailure) {
    try {
        const userState = UserState.get();
        const user = userState.user;
        let serviceType;

        if (typeof user === "object") {
            serviceType = serviceTypes.getSocialConnects(user?.id);
        } else {
            throw new Error("Login data error, try logout and login again.");
        }

        const { response, error } = await service(serviceType);

        if (error) {
            throw new Error(error.message || "Error occured in fetching social list");
        } else if (response) {
            console.log("Received data is address ", response.data.data);
            if (response.data?.success) {
                console.log("Go ",response.data?.data?.social_accounts);
                CacheState.set({ social_connects: response.data?.data?.social_accounts || [] });
                (typeof onSuccess === "function") && setTimeout(() => onSuccess(), 500);
            } else {
                throw new Error(error.message || "Error occured in fetching social list");
            }
        }

    } catch (error) {
        window.notify([{ message: error.message || "Error occured in fetching social list", type: "danger" }]);
    }
}