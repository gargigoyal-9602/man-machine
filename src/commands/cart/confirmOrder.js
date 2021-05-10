import service, { serviceTypes } from "../../services";
import AuthState from "../../redux/states/auth";
import cartCommands from "./index";

export default async function confirmOrder({ cartId, checkoutId }) {
    try {
        const authState = AuthState.get();
        const user = authState.user;
        let serviceType;
        console.log("Auth State is ", authState);

        //auth setter part with optional test data for guest
        if (typeof user === "object") {
            serviceType = serviceTypes.hyperpayOrderConfirm();
        } else {
            throw new Error("Login data error, try logout and login again.");
        }

        if (serviceType) {
            serviceType.body.cart_id = cartId;
            serviceType.body.checkout_id = checkoutId;
        }

        console.log("Cart Service Data is ", serviceType);
        const { response, error } = await service(serviceType);
        if (error) {
            //console.log("Received data is ", error.message);
            throw new Error(error.message || "Error occured in confirming order.");
        } else if (response) {
            //console.log("Received data is ", response);
            if (response.data?.success) {
                window.notify([{ message: response.data?.message || "Order Confirmed successfully", type: "success" }]);
                //CartState.set({ cart: response.data?.data?.order });
                return true;
            } else {
                throw new Error(response.data?.message || "Error occured in confirming order");
            }
        }

    } catch (error) {
        window.notify([{ message: error.message || "Error occured in confirming order", type: "danger" }]);

    } finally {
        cartCommands.createCart();
    }
    return false;
}


