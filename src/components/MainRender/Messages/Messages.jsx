import React from "react";
import style from "./Messages.module.css";
import UserAndDialog from "./UserAndDialog/UserAndDialog";


const Messages = (props) => {
    
    // let messageElement = props.messageData.map(m => 
    // <UserAndDialog
    //         userName={m.userName}
    //         userId={m.userId}
    //         message={m.message}
    //         addMessage={props.addMessage}
    //         updateTextMessage={props.updateTextMessage}
    //     />
    // )

    return (
        <div className={style.main}>
            {/* {messageElement} */}
            <UserAndDialog
                userName={props.messageData.userName}
                userId={props.messageData.userId}
                message={props.messageData.message}
                addMessage={props.addMessage}
                updateTextMessage={props.updateTextMessage} />
        </div>
    );
};

export default Messages;