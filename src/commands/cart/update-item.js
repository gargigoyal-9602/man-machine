import service, { serviceTypes } from "../../services";
import CartState from "../../redux/states/cart";
import AuthState from "../../redux/states/auth";
import cartCommands from "./index";

export default async function updateItem({ productId, variantId, quantity }) {
    try {
        const cartState = CartState.get();
        const authState = AuthState.get();
        let serviceType;
        const user = authState.user;
        console.log("Auth State is ", authState);

        //auth setter part with optional test data for guest
        if (typeof user === "object") {
            serviceType = serviceTypes.updateInCart(user?.id, cartState.cart?.id);
        } else {
            throw new Error("Login data error, try logout and login again.");
        }

        if (serviceType) {
            serviceType.body.product_id = productId;
            serviceType.body.product_variant_id = variantId;
            !variantId && delete serviceType.body.product_variant_id;
            serviceType.body.quantity = quantity;
        }

        console.log("Cart Service Data is", serviceType);
        const { response, error } = await service(serviceType);
        if (error) {
            //console.log("Received data is ", error.message);
            throw new Error(error.message || "Error occured in updating cart");
        } else if (response) {
            //console.log("Received data is ", response);
            if (response.data?.success) {
                window.notify([{ message: response.data?.message || "Product updated successfully", type: "success" }]);
                CartState.set({ cart: response.data?.data?.order });
            } else {
                throw new Error(response.data?.message || "Error occured in updating cart");
            }
        }

    } catch (error) {
        window.notify([{ message: error.message || "Error occured in adding to cart", type: "danger" }]);
        cartCommands.refreshCart();
    }
}


