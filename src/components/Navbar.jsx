import {LOGO_URL} from '../../utils/constants';
import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import useOnlineStatus from '../../hooks/useOnlineStatus';
import UserContext from '../../utils/UserContext';

const Navbar = () => {
    const [btnNameReact,setBtnNameReact] = useState('Login');
    // let btnName = 'Login';
    // console.log(btnName);

    // if there is no dependency array the use effect will work in every render
    // if dependency array = empty => use effect onn initial render (just once)
    // if depenency array has anything => use effect will be called
    // and when the dependency changes
    // if dependency [] is [btnNameReact] => use effect will be called:
    // when btnNameReact gets updated
    
    // useEffect(
    //     ()=>{
    //         console.log('use effect working');
            
    //     }
    // ,[btnNameReact]);
    // console.log('header rendered');

    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);

    const linkClass = "text-xl font-semibold no-underline hover:text-[var(--primary-color)] list-none";
    return (
        <nav className="navbar">
            <div className="navbar-container flex justify-between items-center my-4">
                <div className="logo">
                    <Link to={'/'}><img className='w-[48.2px] rounded-xl hover:scale-[1.1] transition-transform ease-linear duration-200' src={LOGO_URL} alt="" /></Link>
                </div>
                {console.log('Navbar re-renderd')}
                <ul className="nav-links flex justify-between gap-6">
                    <li><Link className={linkClass} to={'/'}>Home</Link></li>
                    <li><Link className={linkClass} to={'/about'}>About Us</Link></li>
                    <li><Link className={linkClass} to={'/contact'}>Contact Us</Link></li>
                    <li><Link className={linkClass} to={'/cart'}>Cart</Link></li>
                    <li><Link className={linkClass} to={'/grocery'}>Grocery</Link></li>
                    <li className={linkClass}>Online Status: {onlineStatus?'✅':'❌'}</li>
                </ul>
                <div className="auth-links flex justify-between gap-6">
                    <a href="#" className={`${linkClass} min-w-[64px] text-center`} onClick={
                        ()=>{
                            btnNameReact === 'Login'?setBtnNameReact('Logout'):setBtnNameReact('Login');//the whole Navbar component will be rerendered
                            // not just the login button
                            // the whole component is updated in the virtual DOM 
                            // but react compares the previous version and refrehes the only changed element
                        }
                    }>{btnNameReact}</a>
                    <li className={linkClass}>{loggedInUser}</li>
                    {/* <a href="#" className={`${linkClass} min-w-[64px] text-center`}>Sign Up</a> */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;