import service, { serviceTypes } from "../../services";
import CartState from "../../redux/states/cart";
import AuthState from "../../redux/states/auth";

export default async function deleteCart() {
    try {
        const cartState = CartState.get();
        const authState = AuthState.get();
        const user = authState.user;
        let serviceType;
        console.log("Auth State is ", authState);

        //auth setter part with optional test data for guest
        if (typeof user === "object") {
            serviceType = serviceTypes.deleteCart(user?.id, cartState.cart?.id);
        } else {
            throw new Error("Login data error, try logout and login again.");
        }



        console.log("Cart Service Data is ", serviceType);
        const { response, error } = await service(serviceType);
        if (error) {
            throw new Error(error.message || "Error in deleting cart");
        } else if (response) {
            if (response.data?.success) {
                //window.notify([{ message: response.data?.message || "Cart deleted successfully", type: "success" }]);
                return true;
            } else {
                throw new Error(response.data?.message || "Error in deleting cart");
            }
        }

    } catch (error) {
        //window.notify([{ message: error.message || "Error in deleting cart", type: "danger" }]);
        return false
    }
}


