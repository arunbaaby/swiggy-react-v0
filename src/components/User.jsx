import { useEffect, useState } from "react";

const User = (props) => {
    //const [count,setCount] = useState(0);

    const [userInfo, setUserInfo] = useState(
        {
            name: '',
            location: '',
            login: ''
        }
    );

    useEffect(() => {
        try {
            const fetchUserInfo = async () => {
                const data = await fetch('https://api.github.com/users/arunbaaby');
                const jsonData = await data.json();
                setUserInfo(jsonData);
            }
            fetchUserInfo();
        } catch (error) {
            console.log(error);
        }
    })

    return (
        <div className="user-wrapper p-8 shadow-2xl rounded-2xl">
            <h2 className="font-bold text-2xl">Functional Component</h2>
            {/* <button onClick={()=>{
                setCount(count+1);
            }}>Count++</button>
            <h3>Count: {count}</h3> */}
            <h3>Name: {userInfo.login}</h3>
            <h4>Location : Angamaly</h4>
            <h4>contact: </h4>
        </div>
    )
}

export default User;