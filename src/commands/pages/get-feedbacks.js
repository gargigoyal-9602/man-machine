import service, { serviceTypes } from "../../services";
import AuthState from "../../redux/states/auth";

export default async function getFeedbacks() {
    try {
        const authState = AuthState.get();
        const user = authState.user;

        let serviceType = {};
        console.log("Auth State is ", authState);

        //auth setter part with optional test data for guest
        if (typeof user === "object") {
            serviceType = serviceTypes.getFeedbacks();
        } else {
            throw new Error("Login data error, try logout and login again.");
        }

        if (serviceType) {
            //serviceType.headers = { 'Accept': "text/html" };
        }
        console.log("Cache Service Data is", serviceType);
        const { response, error } = await service(serviceType);

        if (error) {
            //console.log("Received data is ", error.message);
            throw new Error(error.message || "Error occured in getting feedbacks content");
        } else if (response) {
            console.log("Gontu ", response.data?.data?.feedback);
            return response.data?.data?.feedback;
        }

    } catch (error) {
        window.notify([{ message: error.message || "Error occured in getting feedbacks", type: "danger" }]);
    }
}


