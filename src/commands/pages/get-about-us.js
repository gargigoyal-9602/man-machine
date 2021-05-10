import service, { serviceTypes } from "../../services";
import AuthState from "../../redux/states/auth";

export default async function getAboutUs() {
    try {
        const authState = AuthState.get();
        const user = authState.user;

        let serviceType = {};

        //auth setter part with optional test data for guest
        if (typeof user === "object") {
            serviceType = serviceTypes.getAboutUsData();
        } else {
            throw new Error("Login data error, try logout and login again.");
        }

        if (serviceType) {
            serviceType.headers = { 'Accept': "text/html" };
        }

        const { response, error } = await service(serviceType);

        if (error) {
            throw new Error(error.message || "Error occured in getting aboutus content");
        } else if (response) {

            return response.data;
        }

    } catch (error) {
        window.notify([{ message: error.message || "Error occured in getting aboutus content", type: "danger" }]);
    }
}


