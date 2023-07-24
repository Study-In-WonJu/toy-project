import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";


const UpdateArticle = () => {
    const nav = useNavigate()
    const board = useParams()
    const [article, setArticle] = useState({
        articleId: '',
        title: '',
        content: '',
        lastDate: ''
    })

    const serverUrl = "http://localhost:8080/article/" + board.articleId

    const {title, content} = article

    const config =  {
        headers: {
          "Content-Type": "application/json"
        } 
    }
    
    const onChange = (event) => {
        const { value, name } = event.target
        setArticle({
            ...article,
            [name]: value
        })
    }

    const getArticle = () => {
        axios.get(serverUrl
        ).then(res =>{
            if(res.status === 200){
                setArticle(res.data)
            }
            else{
                alert(res.message)
            }
        }).catch((err) => {
            alert(err.message)
        })
    }

    const updateArticle = ()  => {
        axios.put(serverUrl, JSON.stringify(article), config
        ).then(res =>{
            if(res.status !== 404){
                alert("수정되었습니다")
                console.log(article.title)
                nav(-1)
            }
        }).catch((err) => {
            alert(err.message)
        })
    }
  
    const handleSubmit = (event) => {
        event.preventDefault()
        updateArticle()
      }

    useEffect(() => {
        getArticle()
    }, [])
    
    return(
        <form onSubmit={handleSubmit}>
            <p><input type="text" name="title" value={title} onChange={onChange}/></p>
            <p><textarea name="content" value={content} onChange={onChange}/></p>
            <input type="submit" value="수정"/>
        </form>
    )
}

export default UpdateArticle;