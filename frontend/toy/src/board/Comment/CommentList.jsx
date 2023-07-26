import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const serverUrl = "http://localhost:8080/article"

const CommentList = (comments) =>{
    const [commentList, setCommentList] = useState([])
    const article = useParams()

    useEffect(() => {
        setCommentList(article.comments)
        console.log(article)
    }, [])

    return(
        <>
            <p> 댓글 목록 </p>

            <table>
                <thead/>
                <tbody>
                    {commentList && commentList.map((c) => (
                        <tr key={c.commentId}>
                            {c.content}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default CommentList;