import React from "react";
import style from "./Dialog.module.css";

const Dialog = (props) => {

    let newMessage = React.createRef();

    // let changeTextMessage = () => {
    //     let text = newMessage.current.value;
    //     props.updateTextMessage(text);
    // };

    let sendMessage = () => {
        let text = newMessage.current.value;
        props.addMessage(text);
    };

    return (
        <div className={style.main}>
            <textarea ref={newMessage}></textarea>
            <button onClick={sendMessage}>Send</button>
            <p>  {props.message} / my ID:{props.userId} </p>
        </div>
    );
};

export default Dialog;