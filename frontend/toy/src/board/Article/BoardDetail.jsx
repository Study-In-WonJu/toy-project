import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import Board from '../Article/Board'
import WriteComment from '../Comment/WriteComment';
import CommentList from '../Comment/CommentList';
import DeleteComment from '../Comment/DeleteComment';

const BoardDetail = () => {
    const board = useParams()
    const nav = useNavigate()
    const [article, setArticle] = useState([])
    const [commentList, setCommentList] = useState([])
    const serverUrl = "http://localhost:8080/article/" + board.articleId

    const getArticle = async()  => {
        axios.get(serverUrl
        ).then(res =>{
            if(res.status === 200){
                setArticle(res.data)
                setCommentList(res.data.comments)
                console.log(typeof commentList)
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

    const deleteArticle = async() => {
        axios.delete(serverUrl
        ).then((res) => {
            if(res.status === 204){
                alert("삭제되었습니다")
                nav('/')
            }
            else{
                alert(res.message)
            }
        }).catch((err) => {
            alert(err.message)
        })
    }

    const updateArticle = () => {
        nav('/update/' + article.articleId)
    }

    const backToList = () => {
        nav('/')
    }

    return(
        <>
            <p> 게시글 상세보기 </p>
            <Board 
                articleId={article.articleId}
                title={article.title}
                content={article.content}
                lastDate={article.lastDate}/>

            <div>
                <button onClick={deleteArticle}> 삭제 </button>
                <button onClick={updateArticle}> 수정 </button>
            </div>

            <hr/>

            <WriteComment/>
            
            <p> 댓글 목록 </p>

            {/* <CommentList props={commentList}/> */}

            <table>
                <thead>
                    <tr>
                        <th> Content </th>
                        <th> Id </th>
                    </tr>
                </thead>

                <tbody>
                    {commentList && commentList.map((c) => (
                        <tr>
                            <td key={c.commentId} className="content">
                                {c.content}
                            </td>
                            <td className="id"> {c.commentId} </td>
                            <td> <DeleteComment id={c.commentId}/> </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button onClick={backToList}> 뒤로가기 </button>
        </>
    )
}
export default BoardDetail;