import React from "react";
import style from "./Header.module.css";
import img from "./RSN_free-file.png";

const Header = () => {
    return (
        <header className={style.header}>
            <img src={img} alt='logo'></img>
        </header>
    );
};

export default Header;