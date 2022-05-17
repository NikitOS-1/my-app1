import React from "react";
import Post from "./Post/Post";
import AddPost from "./AddPost/AddPost";
import style from "./UserWall.module.css"

const UserWall = () => {
    return (
        <div className={style.item}>
            <AddPost />
            <Post message = "Hello"/>
        </div>
    );
};

export default UserWall;