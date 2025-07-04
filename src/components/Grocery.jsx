import { useContext } from "react";
import UserContext from "../../utils/UserContext";

const Grocery = ()=>{
    const {loggedInUser} = useContext(UserContext)
    return (
        <div className="grocery-wrap">
            <h1 className="text-4xl font-bold">Grocery Page</h1>
            <h2 className="m-4">User name: {loggedInUser}</h2>
        </div>
    )
}

export default Grocery;