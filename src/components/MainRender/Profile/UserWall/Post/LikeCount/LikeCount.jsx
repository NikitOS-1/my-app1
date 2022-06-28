import React from "react";
import style from "./LikeCount.module.css";



const LikeCount = (props) => {
    return (
        <div className={style.item}>
            {props.likeCounts}
            <button>Like</button>
        </div>
    );
};

export default LikeCount;