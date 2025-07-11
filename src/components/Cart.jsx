import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    const handleRemoveItemCart = () => {
        dispatch(removeItem());
    }

    return (
        <div>
            {cartItems.length === 0 ?
                <h1 className="text-3xl font-bold">Cart is Empty</h1> :
                <div className="grid grid-cols-3 gap-7 mx-4">
                    <div className="col-span-2 bg-white shadow-xl">

                    </div>
                    <div className="p-4 bg-white shadow-xl">
                        {cartItems.map((item, index) => (
                            <div className="border-b-1 border-gray-400" key={index}>
                                <div>{item.name}</div>
                                <div>{item.defaultPrice || item.price}</div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <button className="p-2 text-whitetext-black border rounded-[4px] px-[12px] hover:text-[#FF5200] hover:border-[#FF5200] hover:scale-110 transition-transform duration-300" onClick={handleClearCart}>Clear Cart 🗑</button>
                    </div>
                    <div>
                        <button className="p-2 text-whitetext-black border rounded-[4px] px-[12px] hover:text-[#FF5200] hover:border-[#FF5200] hover:scale-110 transition-transform duration-300" onClick={handleRemoveItemCart}>Remove Item ⛔</button>
                    </div>
                </div>}
        </div>
    )
}

export default Cart;