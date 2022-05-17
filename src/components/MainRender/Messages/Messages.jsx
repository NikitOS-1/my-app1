import React from "react";
import style from "./Messages.module.css";
import UserAndDialog from "./UserAndDialog/UserAndDialog";

const Messages = (props) => {
    return (
        <div className={style.main}>
            <UserAndDialog userName='Nikita' userId='1' message='Hello im nikita' />
            <UserAndDialog userName='Sasha' userId='2' message='how are you ' />
        </div>
    );
};

export default Messages;