import React from "react";
import style from "./Profile.module.css";
import UserTheme from "./UserTheme/UserTheme";
import UserInfo from "./UserInfo/UserInfo";
import UserWall from "./UserWall/UserWall";

const Profile = (props) => {
    return (
        <div className={style.item}>
            <UserTheme />
            <UserInfo />
            <UserWall postData={props.postData} addPost={props.addPost} />
        </div>
    );
};

export default Profile;