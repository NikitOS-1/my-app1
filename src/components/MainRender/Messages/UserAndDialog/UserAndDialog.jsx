import React from "react";
import style from "./UserAndDialog.module.css";
import User from "./User/User";
import Dialog from "./Dialog/Dialog";

const UserAndDialog = (props) => {
    return (
        <div className={style.main}>
            <div className={style.user}>
                <User userName={props.userName}
                    userId={props.userId} />
            </div>

            <div className={style.dialog}>
                <Dialog userId={props.userId}
                    message={props.message}
                    addMessage={props.addMessage}
                    updateTextMessage={props.updateTextMessage} />
            </div>
        </div>
    );
};

export default UserAndDialog;