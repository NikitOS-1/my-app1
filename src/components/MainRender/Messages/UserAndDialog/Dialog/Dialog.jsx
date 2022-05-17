import React from "react";
import style from "./Dialog.module.css";

const Dialog = (props) => {

    return (
        <div className={style.main}>
            <p> {props.message}  / my ID:{props.userId} </p>
        </div>
    );
};

export default Dialog;