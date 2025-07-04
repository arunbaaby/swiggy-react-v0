import { useContext } from 'react';
import {RES_IMG_URL} from '../../utils/constants';
import UserContext from '../../utils/UserContext';

export const RestaurantCard = (props) => {
    const {name,avgRating,cloudinaryImageId,cuisines,sla,promoted } = props.resData.info;

    const {loggedInUser} = useContext(UserContext);
    
    return (
        <div className="res-card-container w-[282px] h-[282px] overflow-hidden transition-transform duration-200 ease-in-out hover:scale-95">
            <div className="res-card-image w-full h-[182px] relative">
                {promoted && (
                <label className='absolute z-10 bg-gray-900 text-amber-50 rounded py-1 px-2 text-xs mt-2 ml-2'>
                    PROMOTED
                </label>
            )}
            <img src={RES_IMG_URL+cloudinaryImageId} className="w-full h-full object-cover block rounded-2xl" alt="Restaurant" />
            </div>
            <div className="card-content px-1">
                <p className="res-name font-extrabold py-1">{name}</p>
                <div className="rating-time font-semibold">
                    <span>⭐ </span>
                    <span> {avgRating} • </span>
                    <span>{sla.slaString}</span>
                </div>
                <p className="cuisine font-medium text-gray-700">{cuisines.join(', ')}</p>
                <p>{loggedInUser}</p>
            </div>
        </div>
    )
}

// HOC not the best approach ot show the promoted label

// export const withPromotedLabel = (RestaurantCard)=>{
//     return (props)=>{
//         return (
//             <div className='relative'>
//                 <label className='absolute z-10 bg-gray-900 text-amber-50 rounded py-1 px-2 text-xs mt-2 ml-2'>PROMOTED</label>
//                 <RestaurantCard {...props}/>
//             </div>
//         )
//     }
// }

