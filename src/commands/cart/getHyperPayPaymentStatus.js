import { serviceTypes, fetcher } from "../../services";
import AuthState from "../../redux/states/auth";
import cartCommands from "./index";

export default async function getHyperPayPaymentStatus({ checkoutId }) {
    try {
        const authState = AuthState.get();
        const user = authState.user;
        let serviceType;
        console.log("Auth State is ", authState);

        //auth setter part with optional test data for guest
        if (typeof user === "object") {
            serviceType = serviceTypes.hyperpayPaymentStatus();
        } else {
            throw new Error("Login data error, try logout and login again.");
        }

        if (serviceType) {
            serviceType.params.checkout_id = checkoutId;
        }

        console.log("Cart Service Data is ", serviceType);
        const { response, error } = await fetcher(serviceType);
        if (error) {
            throw new Error(error.message || "Error occured in placing order.");
        } else if (response) {
            if (response.data?.status === true) {

                const body = response.data?.body;

                if (body.result?.code === "000.100.110") {
                    window.notify([{ message: body.result?.description || "Payment Received successfully", type: "success" }]);
                    return true;
                } else {
                    window.notify([{ message: body.result?.description || "Payment process in progress", type: "danger" }]);
                }
            } else {
                throw new Error(response.data?.message || "Payment initiation error occured");
            }
        }

    } catch (error) {
        window.notify([{ message: error.message || "Error occured in placing order", type: "danger" }]);
        return false;
    } finally {
        cartCommands.createCart();
    }
    return false;
}


