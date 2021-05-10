import service, { serviceTypes } from "../../services";
import CartState from "../../redux/states/cart";
import AuthState from "../../redux/states/auth";
import CacheState from "../../redux/states/cache";

export default function getWebPositionedBanners({ position }) {
    
    try {
        const cacheState = CacheState.get();
        if (position && Array.isArray(cacheState.webbanners)) {
            const  banners = cacheState.webbanners;
            const filtered = banners.filter((item) => item.position == position);
           return filtered;
        } else {
            return [];
        }

    } catch (error) {
        window.notify([{ message: error.message || "Error occured in getting positioned banners", type: "danger" }]);

    }
}


