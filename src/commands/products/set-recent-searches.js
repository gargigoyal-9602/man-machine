import service, { serviceTypes } from "../../services";
import AuthState from "../../redux/states/auth";

export default async function setRecentSearches({ query, productId, className }) {
    try {
        const authState = AuthState.get();
        const user = authState.user;
        let serviceType;

        //auth setter part with optional test data for guest
        if (typeof user === "object") {
            serviceType = serviceTypes.setRecentSearch();
        } else {
            throw new Error("Login data error, try logout and login again.");
        }

        if (serviceType) {
            serviceType.params.query = query;
            serviceType.params.class_id = productId;
            serviceType.params.class_name = className;
        }

        console.log("Product Service Data is", serviceType);
        const { response, error } = await service(serviceType);
        if (error) {
            throw new Error(error.message || "Error occured in quick search");
        } else if (response) {
            if (response.data?.success) {
                return true;
            } else {
                throw new Error("Error occured in quick search");
            }
        }

    } catch (error) {
        window.notify([{ message: error.message || "Error occured in getching recent searches", type: "danger" }]);
        return false;
    }
}


