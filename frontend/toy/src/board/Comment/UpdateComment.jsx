import React, { useState } from "react";
import { useNavigate } from "react-router";
import Comment from './Comment'


const UpdateComment = (props) => {
    const nav = useNavigate()
    const [state, setState] = useState('unClicked')
    const serverUrl = "http://localhost:8080/comment/" + props.id
    let mainContent = null

    if(state === 'unClicked'){
        mainContent = 
        <>
            <button onClick={() => {setState('Clicked')}}> 수정 </button>
        </>
    }
    else if('Clicked'){
        mainContent = 
        <>
            <Comment url={serverUrl} content={props.content}/>
            <button onClick={() => {setState('unClicked')}}> 취소 </button>
        </>
    }

    return(
        <>
            {mainContent}
        </>
    )
}

export default UpdateComment