import React from "react";
import style from "./Messages.module.css";
import UserAndDialog from "./UserAndDialog/UserAndDialog";


const Messages = (props) => {
    let messageElement = props.messageData.map(
        m => <UserAndDialog
            userName={m.userName}
            userId={m.userId}
            message={m.message}
        />
    )

    return (
        <div className={style.main}>
            {messageElement}
        </div>
    );
};

export default Messages;