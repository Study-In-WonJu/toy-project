import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";

const DeleteComment = (props) => {
    const nav = useNavigate()

    const serverUrl = "http://localhost:8080/comment/" + props.id

    const deleteComment = () =>{
        axios.delete(serverUrl
            ).then((res) => {
                if(res.status === 204){
                    alert("삭제되었습니다")
                    nav(0)
                }
                else{
                    alert(res.message)
                }
            }).catch((err) => {
                alert(err.message)
            })
    }
    
    return(
        <button onClick={deleteComment}> 삭제 </button>
    )
}

export default DeleteComment