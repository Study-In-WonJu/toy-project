import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";


const Comment = (props) => {
    const nav = useNavigate()
    const [comment, setComment] = useState({
        content: props.content,
        commentId: '',
        lastDate: ''
    })

    const {content} = comment
    const serverUrl = props.url

    const onChange = (event) => {
        const { value, name } = event.target
        setComment({
            ...comment,
            [name]: value
        })
    }

    const config =  {
        headers: {
          "Content-Type": "application/json"
        } 
    }

    const updateComment = ()  => {
        axios.put(serverUrl, JSON.stringify(comment), config
        ).then(res =>{
            if(res.status !== 404){
                alert("수정되었습니다")
                nav(0)
            }
        }).catch((err) => {
            alert(err.message)
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        updateComment()
      }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <p><textarea name="content" value={content} onChange={onChange}/></p>
                <button type="submit"> 수정 </button>
            </form>
        </>
    )
}

export default Comment