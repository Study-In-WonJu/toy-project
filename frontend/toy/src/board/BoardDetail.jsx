import React from "react";

const BoardArticle = (props) => {
    return(
        <>
            <span>{props.id}</span>
            <span>{props.title}</span>
            <span>{props.content}</span>
            <span>{props.lastDate}</span>
            <hr/>
        </>
    )
}
export default BoardArticle;