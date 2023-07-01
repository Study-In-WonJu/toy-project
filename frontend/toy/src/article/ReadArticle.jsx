import React from "react";
import '../board/BoardForm.css'

/* ReadArticle.jsx
    게시글 하나를 선택해 그 내용을 읽을 때 화면.
    헤더, 제목, 글 내용, 댓글, 푸터로 구성.
 */

// const articleElement = [id, title, content, lastDate];
// const commentElement = [id, content, lastDate, articleID]

function ReadArticle(){
    return(
        <>
            <div>
                <h2> Title </h2>
            </div>

            <div>
                <p> contentttttt </p>
            </div>
            
            <table>
                <td class="articleID"> id </td>
                <td class="comment"> commentcontent </td>
                <td class="lastDate"> lastDate </td>
            </table>
        </>
    )
}

export default ReadArticle;