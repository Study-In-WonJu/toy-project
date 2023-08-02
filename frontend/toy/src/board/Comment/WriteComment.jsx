import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";

const WriteComment = () => {
    const board = useParams()
    const [comment, setComment] = useState([])
    const serverUrl = "http://localhost:8080/article/" + board.articleId
    let nav = useNavigate()

    const config =  {
        headers: {
          "Content-Type": "application/json"
        } 
      }

    const saveComment = ()  => {
        axios.post(serverUrl + '/comment', JSON.stringify(comment), config
        ).then(res =>{
            if(res.status === 201){
              alert("작성 완료")
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
        <>
            <input type="text" name="comment" value={comment} onChange={(e) => {
                    setComment(e.target.value)
                }}/>
            <button onClick={saveComment}> 작성 </button>
        </>
    )
}

export default WriteComment;