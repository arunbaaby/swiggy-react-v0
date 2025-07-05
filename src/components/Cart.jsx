import { useSelector } from "react-redux";

const Cart = ()=>{

    const cartItems = useSelector((store)=>store.cart.items);
    return (
        <div className="cart-wrapper flex flex-col">
            <h1 className="text-3xl font-bold">Cart</h1>
            <h1 className="text-2xl">{cartItems}</h1>
        </div>
    )
}

export default Cart;