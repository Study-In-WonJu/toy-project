import React, { useEffect, useState } from "react";
import axios from 'axios';

const serverUrl = "http://localhost:8080/article"

/* WriteArticle.jsx
    게시글을 작성할 때의 화면.
    헤더, 제목, 내용 작성칸, 게시 버튼, 푸터로 구성.
*/

const config =  {
   headers: {
    "Content-Type": "application/json"
   } 
};
function WriteArticle(){
    const [article, setArticle] = useState({
        title: '',
        content: ''
    })

    const {title, content} = article;

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
                alert("status 201")
            }
            else{
                alert(res.message)
            }
        }).catch((err) => {
            console.log(err)
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

export default WriteArticle;