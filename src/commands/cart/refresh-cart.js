import service, { serviceTypes } from "../../services";
import CartState from "../../redux/states/cart";
import AuthState from "../../redux/states/auth";

export default async function refreshCart() {
    try {
        console.log("refreshing the cart");
        const cartState = CartState.get();
        const authState = AuthState.get();
        const user = authState.user;
        let serviceType = {};

        //auth setter part with optional test data for guest
        if (typeof user === "object") {
            serviceType = serviceTypes.refreshCart(user?.id, cartState.cart?.id)
        } else {
            throw new Error("Login data error, try logout and login again.");
        }

        console.log("Cart Service Data is", serviceType);
        const { response, error } = await service(serviceType);
        if (error) {
            //console.log("Received data is ", error.message);
            throw new Error(error.message || "Error occured in refreshing cart");
        } else if (response) {
            //console.log("Received data is ", response);
            if (response.data?.success) {
                CartState.set({ cart: response.data?.data?.order });
            } else {
                throw new Error("Error occured in refreshing cart");
            }
        }

    } catch (error) {
        //window.notify([{ message: error.message || "Error occured in refreshing cart", type: "danger" }]);
        
    }
}


