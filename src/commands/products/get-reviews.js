import service, { serviceTypes } from "../../services";
import AuthState from "../../redux/states/auth";

export default async function getReviews({ productId, perPage, page }) {
    try {
        const authState = AuthState.get();
        const user = authState.user;
        let serviceType;
        console.log("Auth State is ", authState);

        //auth setter part with optional test data for guest
        if (typeof user === "object") {
            serviceType = serviceTypes.getProductReviews(user?.id);
        } else {
            throw new Error("Login data error, try logout and login again.");
        }

        if (serviceType) {
            serviceType.params.product_id = productId;
            serviceType.params.per_page = perPage;
            //serviceType.params.page = page;
        }

        console.log("Product Service Data is", serviceType);
        const { response, error } = await service(serviceType);
        if (error) {
            throw new Error(error.message || "Error occured in gettting reviews");
        } else if (response) {
            if (response.data?.success) {
                return response.data?.data;
            } else {
                throw new Error("Error occured in getting reviews");
            }
        }

    } catch (error) {
        window.notify([{ message: error.message || "Error occured in getting reviews.", type: "danger" }]);
        return false;
    }
}


