import service, { serviceTypes } from "../../services";
import AuthState from "../../redux/states/auth";

export default async function getQuickSearch({ query }) {
    try {
        const authState = AuthState.get();
        const user = authState.user;
        let serviceType;
        console.log("Auth State is ", authState);

        //auth setter part with optional test data for guest
        if (typeof user === "object") {
            serviceType = serviceTypes.getQuickSearch();
        } else {
            throw new Error("Login data error, try logout and login again.");
        }

        if (serviceType) {
            serviceType.params.query = query;
        }

        console.log("Product Service Data is", serviceType);
        const { response, error } = await service(serviceType);
        if (error) {
            //console.log("Received data is ", error.message);
            throw new Error(error.message || "Error occured in quick search");
        } else if (response) {
            //console.log("Received data is ", response);
            if (response.data?.success) {
                return response.data?.data?.products;
            } else {
                throw new Error("Error occured in quick search");
            }
        }

    } catch (error) {
        //window.notify([{ message: error.message || "Error occured in refreshing cache", type: "danger" }]);
        return [];
    }
}


