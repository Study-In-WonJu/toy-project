import React, { useState, useEffect } from 'react';
import axios from "axios"
import { useParams } from 'react-router-dom';
import Board from './Board'

const BoardDetail = () => {
//     const articleId = useParams()
//     const [article, setArticle] = useState([])
//     const serverUrl = "http://localhost:8080/article/" + articleId

//     const getArticle = async()  => {
//         axios.get(serverUrl
//         ).then(res =>{
//             if(res.status === 200){
//                 setArticle(res.data)
//             }
//             else{
//                 alert(res.message)
//             }
//         }).catch((err) => {
//             alert(err.message)
//         })
//     }

//     useEffect(() => {
//         getArticle()
//     }, [])

//     return(
//         <>
//             <p> 게시글 상세보기 </p>
//             <Board 
//                 articleId={article.articleId}
//                 title={article.title}
//                 content={article.content}
//                 lastDate={article.lastDate}/>
//             <hr/>
//         </>
//     )
}
export default BoardDetail;