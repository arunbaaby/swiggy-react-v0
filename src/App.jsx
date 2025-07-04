import { useEffect, useState } from "react";
import UserContext from "../utils/UserContext";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { Provider } from 'react-redux'
import appStore from "../utils/appStore";

const App = () => {
    const [userName, setUserName] = useState();
    useEffect(() => {
        const userData = {
            name: 'Arun baby'
        }
        setUserName(userData.name);
    }, [])
    return (
        <div className="app mx-[calc(7%+52px)]">
            {/** to provide the store wrap it with <Provider and pass the store as props> */}
            <Provider store={appStore}>
                <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
                    <Navbar />
                    <Outlet />
                </UserContext.Provider>
            </Provider>
        </div>
    )
}
export default App;