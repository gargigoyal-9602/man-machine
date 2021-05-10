import CacheState from "../../redux/states/cache";

export default function getPositionedBanners({ position }) {
    try {
        const cacheState = CacheState.get();
        if (position && Array.isArray(cacheState.banners)) {
            const banners = cacheState.banners;
            return banners.filter((item) => item.position == position);
        } else {
            return [];
        }

    } catch (error) {
        window.notify([{ message: error.message || "Error occured in getting positioned banners", type: "danger" }]);
    }
}


