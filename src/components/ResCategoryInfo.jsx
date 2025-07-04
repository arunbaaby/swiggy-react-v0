import { RES_ITEM_URL } from "../../utils/constants";

const ResCategoryInfo = ({ data, dummy }) => {
    //console.log('res cat info', data);
    console.log(dummy);// data is passed from the parent to the children...this is called props drilling    
    const { name, price, description, imageId, defaultPrice, ratings } = data.card.info;

    return (
        <div className="">
            <div className="grid grid-cols-[3fr_1fr] border-b-1 border-gray-300 py-8 gap-4">
                <div className="flex flex-col justify-between">
                    <div className="font-bold text-gray-700 text-xl">{name}</div>
                    <div className="font-bold">₹ {price?price/100:defaultPrice/100}</div>
                    <div><span className="text-green-900 font-bold">❇️{ratings.aggregatedRating.rating} </span><span className="text-gray-600 font-bold">({ratings.aggregatedRating.ratingCount})</span></div>
                    <div className="text-gray-900">{description}</div>
                </div>
                <div className="relative w-[156px] h-[160px] justify-self-end">
                    <img className="rounded-xl w-full h-[144px] object-cover" src={RES_ITEM_URL+imageId} alt="" />
                    <button className="absolute bottom-0 left-4 right-4 p-2 z-10 bg-white text-[rgb(27,166,114)] text-lg font-bold rounded-lg shadow-md">ADD</button>
                </div>
            </div>
        </div>
    )
}

export default ResCategoryInfo;