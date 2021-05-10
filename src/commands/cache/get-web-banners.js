import service, { serviceTypes } from "../../services";
import AuthState from "../../redux/states/auth";
import CacheState from "../../redux/states/cache";

export default async function getWebBanners() {
    try {
        const authState = AuthState.get();
        const user = authState.user;
        let serviceType = {};

        if (typeof user === "object") {
            serviceType = serviceTypes.getWebBanners();
        } else {
            throw new Error("Login data error, try logout and login again.");
        }

        const { response, error } = await service(serviceType);
        if (error) {
            throw new Error(error.message || "Error occured in getting banners");
        } else if (response) {
            if (response.data?.success === true) {
                CacheState.set({ webbanners: response.data?.data?.banners });
            } else {
                throw new Error("Error occured in getting banners");
            }
        }

    } catch (error) {
        window.notify([{ message: error.message || "Error occured in getting banners", type: "danger" }]);
    }
}


