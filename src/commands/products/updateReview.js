import service, { serviceTypes } from "../../services";
import AuthState from "../../redux/states/auth";

export default async function updateReview({ reviewId, rating, comment, onSuccess }) {
    try {
        const authState = AuthState.get();
        const user = authState.user;
        let serviceType;
        console.log("Auth State is ", authState);

        //auth setter part with optional test data for guest
        if (typeof user === "object") {
            serviceType = serviceTypes.updateReview(user?.id, reviewId);
        } else {
            throw new Error("Login data error, try logout and login again.");
        }

        if (serviceType) {
            serviceType.body.rating = rating;
            serviceType.body.comment = comment;
        }

        console.log("Product Service Data is", serviceType);
        const { response, error } = await service(serviceType);
        if (error) {
            throw new Error(error.message || "Error occured in updating Review");
        } else if (response) {
            if (response.data?.success) {
                window.notify([{ message: response.data?.message || "Review Updated Successfully", type: "success" }]);
                //CartState.set({ cart: response.data?.data?.order });
                (typeof onSuccess === "function") && onSuccess();
            } else {
                throw new Error(error.message || "Error occured in updating review");
            }
        }

    } catch (error) {
        window.notify([{ message: error.message || "Error occured in updating review", type: "danger" }]);
    }
}


