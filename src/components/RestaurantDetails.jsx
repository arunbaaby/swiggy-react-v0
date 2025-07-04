import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RES_IMG_URL, RES_MENU_API } from "../../utils/constants";
import useRestaurantDetails from "../../hooks/useRestaurantMenu";
import ResShimmer from "./ResShimmer";
import ResCategory from "./ResCategory";

const RestaurantDetails = () => {

    const { resId } = useParams();
    //custom hook 
    const restaurantDetails = useRestaurantDetails(resId);

    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

    const dummy = 'Dummy data';

    if (!restaurantDetails) {
        return <ResShimmer />
    }

    //console.log('resDet ', restaurantDetails);

    const { name } = restaurantDetails.cards[2].card.card.info;
    //console.log(name);


    const categories = restaurantDetails.cards[5].groupedCard.cardGroupMap.REGULAR.cards.filter((c) => c.card.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log('cate :', categories);

    // const recommmended = categories.filter((c)=>c.card.card.title==='Recommended');
    // console.log( 'recommmend ', recommmended);


    return (
        <section className="max-w-[800px] min-h-[800px] mx-auto">
            <div className="mt-16">
                <h1 className="text-3xl font-bold text-gray-950">{name}</h1>
            </div>
            {/* Accordian */}
            <div className="my-8">
                {categories.map((category, index) =>
                    <ResCategory
                        data={category.card.card}
                        key={index}
                        selected={index === selectedCategoryIndex}
                        onClickToSetIndex={()=>{
                            setSelectedCategoryIndex(index===selectedCategoryIndex?null:index)
                        }}
                        dummy={dummy}
                    />
                )}
            </div>
        </section>
    );
}

export default RestaurantDetails;