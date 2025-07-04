import { useEffect, useState } from "react";

const useOnlineStatus = ()=>{

    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(()=>{
        window.addEventListener('offline',()=>{
            setOnlineStatus(false);
        });

        window.addEventListener('online',()=>{
            setOnlineStatus(true);
        });
    },[]);
    
    return onlineStatus;
}

export default useOnlineStatus;


// import { useEffect, useState } from "react";

// const useOnlineStatus = () => {
//   const [onlineStatus, setOnlineStatus] = useState(navigator.onLine); // ✅ use real status on initial load

//   useEffect(() => {
//     const handleOffline = () => setOnlineStatus(false);
//     const handleOnline = () => setOnlineStatus(true);

//     window.addEventListener('offline', handleOffline);
//     window.addEventListener('online', handleOnline);

//     // Optional cleanup (good practice)
//     return () => {
//       window.removeEventListener('offline', handleOffline);
//       window.removeEventListener('online', handleOnline);
//     };
//   }, []);

//   return onlineStatus;
// };

// export default useOnlineStatus;
