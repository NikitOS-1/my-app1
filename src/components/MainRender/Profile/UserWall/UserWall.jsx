import React from "react";
import Post from "./Post/Post";
import AddPost from "./AddPost/AddPost";
import style from "./UserWall.module.css"

const UserWall = (props) => {
    let postElement = props.postData.map(p =>
        <Post posts={p.post} likeCounts={p.likeCount} />);

    return (
        <div className={style.item}>
            <AddPost addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
                newPostText={props.newPostText} />
            {postElement}
        </div>
    );
};

export default UserWall;