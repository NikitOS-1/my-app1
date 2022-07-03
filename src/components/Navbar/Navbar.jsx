import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";
import User from './User/User';

const active = ({ isActive }) => `${isActive ? style.active : ''}`;


const Navbar = (props) => {

    let friendsData = props.friendData.map(f => <User user={f.user} />)

    return (
        <nav className={style.navbar}>
            <div className={style.item}>
                <NavLink className={active} to='/profile'>Profile</NavLink>
            </div>

            <div className={style.item}>
                <NavLink className={active} to='/messages'>Messages</NavLink>
            </div>

            <div className={style.item}>
                <NavLink className={active} to='/news'>News</NavLink>
            </div>

            <div className={style.item}>
                <NavLink className={active} to='/music'>Music</NavLink>
            </div>

            <div className={style.item}>
                <NavLink className={active} to='/settings'>Settings</NavLink>
            </div>
            <div className={style.navFriends} >
                {friendsData}
            </div>
        </nav>
    );
};

export default Navbar;