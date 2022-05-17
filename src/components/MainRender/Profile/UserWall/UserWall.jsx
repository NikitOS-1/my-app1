import React from "react";
import Post from "./Post/Post";
import AddPost from "./AddPost/AddPost";
import style from "./UserWall.module.css"

let postData = [
    {
        post: 'new post'
    }
];

const UserWall = (props) => {
    return (
        <div className={style.item}>
            <AddPost />
            <Post posts={postData[0].post} />
        </div>
    );
};

export default UserWall;