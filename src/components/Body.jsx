import {RestaurantCard} from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { SWIGGY_API } from "../../utils/constants";
import useFetchSwiggyData from "../../hooks/useFetchSwiggyData";
import BodyShimmmer from "./BodyShimmer";
import useOnlineStatus from "../../hooks/useOnlineStatus";
import UserContext from "../../utils/UserContext";

const Body = () => {
    //whenever a state variable updates react re-renders the component
    //filtered list is the data and setFilteredlist is the function which updates the filteredList
    // const [allRestaurants, setAllRestaurants] = useState([]);
    const allRestaurants = useFetchSwiggyData();

    const [filteredList, setFilteredList] = useState([]);
    //search
    const [searchText, setSearchText] = useState('');

    // user context change imported method
    const {loggedInUser, setUserName} = useContext(UserContext)

    // const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    useEffect(() => {
        setFilteredList(allRestaurants);
    }, [allRestaurants]);

    // useEffect(() => {
    //     fetchSwiggyData();
    // }, []);

    // const fetchSwiggyData = async () => {
    //     try {
    //         const data = await fetch(SWIGGY_API);
    //         const jsonData = await data.json();
    //         console.log(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //         const restaurants = jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    //         if (restaurants) {
    //             setAllRestaurants(restaurants);
    //             setFilteredList(restaurants);
    //         } else {
    //             console.warn("No restaurants found in Swiggy response");
    //         }
    //     } catch (error) {
    //         console.error('Error fetching data swiggy data :', error);
    //     }
    // }

    const isOnline = useOnlineStatus();

    if(!isOnline){
        return <h1>Looks like you are offline!!</h1>
    }

    if (allRestaurants === null || filteredList.length === 0) { 
        return <BodyShimmmer/>
    }
    
    return (
        <main className="body">
            <div className="top-rated-filter my-8 flex gap-16">
                <div className="search flex justify-between gap-4">
                    <input type="text" className="search-box p-3 w-[300px] bg-[#F0F0F5] rounded-[8px] text-gray-600 text-xl font-semibold" placeholder="Search Restaurants" value={searchText} onChange={
                        (e) => {
                            setSearchText(e.target.value);
                        }
                    } />
                    <button className="search-button text-black border rounded-[4px] px-[12px] hover:text-[#FF5200] hover:border-[#FF5200] hover:scale-110 transition-transform duration-300" onClick={
                        () => {
                            console.log(searchText);
                            const searchFilter = allRestaurants.filter((res) => {
                                return res?.info?.name?.toLowerCase().includes(searchText.toLowerCase());
                            });
                            setFilteredList(searchFilter);
                        }
                    }>Search</button>
                </div>
                <button className="filter-btn border rounded-[4px] px-[12px] hover:text-[#FF5200] hover:border-[#FF5200] hover:scale-110 transition-transform duration-300" onClick={() => {
                    const topRated = allRestaurants.filter((res) => res.info.avgRating >= 4.6)
                    setFilteredList(topRated)
                }}>Top Rated ⇄</button>
                <input className="bg-[#F0F0F5] rounded p-4" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}/>
            </div>
            <div className="">
                <h1 className="text-2xl font-extrabold">Restaurants with online food delivery in Kochi</h1>
            </div>
            <section className="res-container grid grid-cols-4 gap-8 my-8">
                {filteredList.map((res, index) => {
                    return (<Link key={res.info.id} to={`/restaurant/${res.info.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <RestaurantCard resData = {res} />
                        {/* {res.info.promoted?<RestaurantCardPromoted resData= {res}/>:<RestaurantCard resData={res}/>} */}
                    </Link>)
                })}
            </section>
        </main>
    )
}

export default Body;