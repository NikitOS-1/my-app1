import React from "react";
import style from "./AddPost.module.css";

const AddPost = (props) => {

    let text = React.createRef();
    let addText = () => {
        props.addPost(text.current.value)
    };

    return (
        <div className={style.item}>
            <textarea ref={text}></textarea>
            <button onClick={addText}>Post</button>
        </div>
    );
};

export default AddPost;