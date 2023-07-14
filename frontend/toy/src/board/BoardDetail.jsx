import React, { useState, useEffect } from 'react';
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom';
import Board from './Board'

const BoardDetail = () => {
    const board = useParams()
    const [article, setArticle] = useState([])
    const serverUrl = "http://localhost:8080/article/" + board.articleId

    const getArticle = async()  => {
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

    useEffect(() => {
        getArticle()
    }, [])

    return(
        <>
            <p> 게시글 상세보기 </p>
            <Board 
                articleId={article.articleId}
                title={article.title}
                content={article.content}
                lastDate={article.lastDate}/>

            <button> 삭제 </button>
            <button> 수정 </button>

            <hr/>

            <h1> 대충 댓글 </h1>
        </>
    )
}
export default BoardDetail;