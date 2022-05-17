import React from "react";
import style from "./Messages.module.css";
import UserAndDialog from "./UserAndDialog/UserAndDialog";

let messageData = [
    {
        userName: 'Nikita',
        userId: 1,
        message: 'Hello im nikita'
    },
    {
        userName: 'Sasha',
        userId: 2,
        message: 'Hello im Sasha'
    }
];

const Messages = (props) => {
    return (
        <div className={style.main}>
            <UserAndDialog
                userName={messageData[0].userName}
                userId={messageData[0].userId}
                message={messageData[0].message}
            />
            <UserAndDialog
                userName={messageData[1].userName}
                userId={messageData[1].userId}
                message={messageData[1].message}
            />
        </div>
    );
};

export default Messages;