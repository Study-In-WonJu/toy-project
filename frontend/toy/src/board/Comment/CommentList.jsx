import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import WriteComment from "./WriteComment";
import axios from "axios";

const serverUrl = "http://localhost:8080/article/"

const CommentList = (props) =>{
    const board = useParams()
    const nav = useNavigate()
    const [commentList, setCommentList] = useState([])

    const getCommentList = () =>{
        // axios.get(serverUrl + board.articleId
        //     ).then(res =>{
        //         if(res.status === 200){
        //             setCommentList(res.data.comments)
        //         }
        //         else{
        //             alert(res.message)
        //         }
        //     }).catch((err) => {
        //         alert(err.message)
        //     })
        console.log(typeof props)
        setCommentList(props)
        console.log(typeof commentList)
    }

    useEffect(() => {
        getCommentList()
        console.log(props)
        console.log(commentList)
    }, [])

    const updateComment = (id) =>{
        nav('/update/comment/' + id)        
    }

    const deleteComment = (id) => {
        axios.delete(serverUrl + id
            ).then((res) => {
                if(res.status === 204){
                    alert("삭제되었습니다")
                    nav()
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
            <WriteComment/>
            <p> 댓글 목록 </p>

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
                            <td><button onClick={() => updateComment(c.commentId)}> 수정 </button></td>
                            <td><button onClick={() => deleteComment(c.commentId)}> 삭제 </button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default CommentList;