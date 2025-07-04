import { SWIGGY_API } from "../utils/constants";
import { useEffect, useState } from "react";
const useFetchSwiggyData = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);

    useEffect(() => {
        fetchSwiggyData();
    }, []);

    const fetchSwiggyData = async () => {
        try {
            const data = await fetch(SWIGGY_API);
            const jsonData = await data.json();
            //console.log('restaurants -2 : ',jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            //console.log('fetched data : ',jsonData?.data?.cards);
            // in cards[2] only there is promoted field
            const restaurants = jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

            if (restaurants) {
                setAllRestaurants(restaurants);
            } else {
                console.warn("No restaurants found in Swiggy response");
            }
        } catch (error) {
            console.error('Error fetching data swiggy data :', error);
        }
    }
    return allRestaurants;
}

export default useFetchSwiggyData;