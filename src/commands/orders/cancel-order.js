import service, { serviceTypes } from "../../services";
import AuthState from "../../redux/states/auth";

export default async function cancelOrder({ orderId, itemId, onSuccess }) {
    try {
        const authState = AuthState.get();
        const user = authState.user;
        let serviceType;
        console.log("Auth State is ", authState);

        //auth setter part with optional test data for guest
        if (typeof user === "object") {
            serviceType = serviceTypes.cancelOrderItem(user?.id, orderId);
        } else {
            throw new Error("Login data error, try logout and login again.");
        }

        if (serviceType) {
            itemId && (serviceType.body["item_id[]"] = itemId);
        }

        console.log("Cart Service Data is", serviceType);
        const { response, error } = await service(serviceType);
        if (error) {
            //console.log("Received data is ", error.message);
            throw new Error(error.message || "Error occured in cancelling order");
        } else if (response) {
            //console.log("Received data is ", response);
            if (response.data?.success) {
                window.notify([{ message: response.data?.message || "Order Cancelled successfully", type: "success" }]);
                //CartState.set({ cart: response.data?.data?.order });
                (typeof onSuccess === "function") && onSuccess();
            } else {
                throw new Error(error.message || "Error occured in cancelling order");
            }
        }

    } catch (error) {
        window.notify([{ message: error.message || "Error occured in cancelling order", type: "danger" }]);
    }
}


