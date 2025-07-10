import { useSelector } from "react-redux";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    return (
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
        </div>
    )
}

export default Cart;