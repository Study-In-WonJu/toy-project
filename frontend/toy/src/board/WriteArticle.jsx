import React, { useEffect, useState } from "react";
import axios from 'axios';

const serverUrl = "http://localhost:8080/article"

/* WriteArticle.jsx
    게시글을 작성할 때의 화면.
    헤더, 제목, 내용 작성칸, 게시 버튼, 푸터로 구성.
*/


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

    useEffect = ()  => {
        axios.post(serverUrl, {
            body: JSON.stringify(article)
        }).then(res =>{
            if(res.status === 201){
                alert("status 201")
            }
            else{
                alert("status not 201")
            }
        }).catch((err) => {
            console.log(err.res.data)
        })
    }


    return(
        <>
            <form>
                <p><input type="text" name="title" value={title} onChange={onChange}/></p>
                <p><textarea name="content" value={content} onChange={onChange}/></p>
            </form>

            <input type="submit" value="게시"/>
        </>
    )
}

export default WriteArticle;