import React from "react";
import { NavLink } from "react-router-dom";
import style from "./User.module.css";

// const active = ({ isActive }) => `${isActive ? style.active : ''}`;

const User = (props) => {
    return (
        <div className={style.main}>
            <NavLink to={props.userId}>{props.userName}</NavLink>
        </div>
    );
};

export default User;