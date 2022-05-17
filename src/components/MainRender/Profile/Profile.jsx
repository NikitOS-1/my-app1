import React from "react";
import style from "./Profile.module.css";
import UserTheme from "./UserTheme/UserTheme";
import UserInfo from "./UserInfo/UserInfo";
import UserWall from "./UserWall/UserWall";

const Profile = () => {
    return (
        <div className={style.item}>
            <UserTheme />
            <UserInfo />
            <UserWall />
        </div>
    );
};

export default Profile;