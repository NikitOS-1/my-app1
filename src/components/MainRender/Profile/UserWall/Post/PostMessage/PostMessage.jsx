import React from "react";
import style from "./PostMessage.module.css";

const PostMessage = (props) => {
    return (
        <div className={style.item}>
            <p>{props.posts}</p>
        </div>
    );
};

export default PostMessage;