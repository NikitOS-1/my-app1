import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";

const active = ({ isActive }) => `${isActive ? style.active : ''}`;

const Navbar = (props) => {
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
        </nav>
    );
};

export default Navbar;