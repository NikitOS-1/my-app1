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
    },{
        userName: 'Sasha',
        userId: 2,
        message: 'Hello im Sasha'
    },{
        userName: 'Sasha',
        userId: 2,
        message: 'Hello im Sasha'
    },{
        userName: 'Sasha',
        userId: 2,
        message: 'Hello im Sasha'
    },{
        userName: 'Sasha',
        userId: 2,
        message: 'Hello im Sasha'
    },{
        userName: 'Sasha',
        userId: 2,
        message: 'Hello im Sasha'
    },{
        userName: 'Sasha',
        userId: 2,
        message: 'Hello im Sasha'
    }
];

let messageElement = messageData.map(
    m => <UserAndDialog
        userName={m.userName}
        userId={m.userId}
        message={m.message}
    />
)

const Messages = (props) => {
    return (
        <div className={style.main}>
            {messageElement}
        </div>
    );
};

export default Messages;