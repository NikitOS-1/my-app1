import React from "react";
import Ava from "./Ava/Ava";
import Description from "./Description/Description";
import style from "./UserInfo.module.css"

const UserInfo = () => {
    return (
        <div className={style.main}>

            <div className={style.avaItem}>
                <Ava />
            </div>

            <div className={style.descItem}>
                <Description />
            </div>

        </div>
    );
};

export default UserInfo;