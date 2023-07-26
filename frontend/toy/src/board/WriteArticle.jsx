import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const serverUrl = "http://localhost:8080/article"

const WriteArticle = () => {
    const nav = useNavigate()

    const [article, setArticle] = useState({
        title: '',
        content: ''
      })
    
    const {title, content} = article;
  
    const config =  {
      headers: {
        "Content-Type": "application/json"
      } 
    }
  
    const onChange = (event) => {
      setArticle({
          ...article,
          [event.target.name]: event.target.value,
      })
    }
    
    const saveArticle = ()  => {
      axios.post(serverUrl, JSON.stringify(article), config
      ).then(res =>{
          if(res.status === 201){
            alert("작성 완료")
            const articleUrl = res.headers.location
            nav(articleUrl)
          }
          else{
              alert(res.message)
          }
      }).catch((err) => {
          alert(err.message)
      })
    }
    
    const handleSubmit = (event) => {
      event.preventDefault()
      saveArticle()
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <p><input type="text" name="title" value={title} onChange={onChange}/></p>
                <p><textarea name="content" value={content} onChange={onChange}/></p>
                <input type="submit" value="게시"/>
            </form>
        </>
    )
}

export default WriteArticle