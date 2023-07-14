import React from "react";

const Board = ({articleId, title, content, lastDate}) => {
    return(
        <>
            <div>
                <h2>{title}</h2>
            </div>
            <div>
                <h4>{content}</h4>
            </div>
            <div>
                <h6>id : {articleId}</h6>
                <h6>{lastDate}</h6>
            </div>
        </>
    )
}

export default Board