import React from "react";
import style from "./LikeCount.module.css";



const LikeCount = () => {
    return (
        <div className={style.item}>
            <p>1</p>
            <button>Like</button>
        </div>
    );
};

export default LikeCount;