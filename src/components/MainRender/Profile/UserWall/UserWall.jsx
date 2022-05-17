import React from "react";
import Post from "./Post/Post";
import AddPost from "./AddPost/AddPost";
import style from "./UserWall.module.css"

let postData = [
    { post: 'new pos3t' }
];

let postElement = postData.map(p =>
    <Post posts={p.post} />
);

const UserWall = (props) => {
    return (
        <div className={style.item}>
            <AddPost />
            {postElement}
        </div>
    );
};

export default UserWall;