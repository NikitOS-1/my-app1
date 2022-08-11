import React from "react";
import style from "./AddPost.module.css";

const AddPost = (props) => {
    let newPostElement = React.createRef();

    let addText = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        
    };

    return (
        <div className={style.item}>
            <textarea onChange={onPostChange} ref={newPostElement}
                value={props.newPostText}></textarea>

            <button onClick={addText}>Post</button>
        </div>
    );
};

export default AddPost;