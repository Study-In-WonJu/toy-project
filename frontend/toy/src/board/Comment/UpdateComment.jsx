import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";


const UpdateComment = () => {
    const nav = useNavigate()
    const board = useParams()
    const [comment, setComment] = useState({
        commentId: '',
        content: '',
        lastDate: ''
    })

    const serverUrl = "http://localhost:8080/article/" + board.articleId

    const {commentId, content} = comment

    const config =  {
        headers: {
          "Content-Type": "application/json"
        } 
    }
    
    const onChange = (event) => {
        const { value, name } = event.target
        setComment({
            ...comment,
            [name]: value
        })
    }

    const getComment = () => {
        axios.get(serverUrl
        ).then(res =>{
            if(res.status === 200){
                setComment(res.data)
            }
            else{
                alert(res.message)
            }
        }).catch((err) => {
            alert(err.message)
        })
    }

    const updateComment = ()  => {
        axios.put(serverUrl, JSON.stringify(comment), config
        ).then(res =>{
            if(res.status !== 404){
                alert("수정되었습니다")
            }
        }).catch((err) => {
            alert(err.message)
        })
    }
  
    const handleSubmit = (event) => {
        event.preventDefault()
        updateComment()
      }

    useEffect(() => {
        getComment()
    }, [])
    
    return(
        <form onSubmit={handleSubmit}>
            <p>{commentId}</p>
            <p><textarea name="content" value={content} onChange={onChange}/></p>
            <input type="submit" value="수정"/>
        </form>
    )
}

export default UpdateComment