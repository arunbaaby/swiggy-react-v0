import { useEffect, useState } from "react";
import { RES_MENU_API } from "../utils/constants";

const useRestaurantDetails = (resId) => {

    const [resDetails, setResDetails] = useState(null);

    useEffect(() => {
        fetchResDetails();
    },[resId]);

    const fetchResDetails = async () => {
        try {
            const menuData = await fetch(RES_MENU_API + resId);
            const jsonMenu = await menuData.json();
            //console.log(jsonMenu.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards);
            setResDetails(jsonMenu.data);
        } catch (error) {
            console.log(error);
        }
    }

    return resDetails;
}

export default useRestaurantDetails;