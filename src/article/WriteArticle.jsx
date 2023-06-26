import React from "react";
import Header from "../layout/Header"
import Footer from "../layout/Footer"

/* WriteArticle.jsx
    게시글을 작성할 때의 화면.
    헤더, 제목, 내용 작성칸, 게시 버튼, 푸터로 구성.
*/

// const articleElement = [id, title, content, lastDate];

function WriteArticle(){
    return(
        <>
            <Header now="Write"/>

            <p><input type="text"/></p>

            <p><textarea cols={50} rows={10}/></p>

            <button> 게시 </button>

            <Footer/>
        </>
    )
}

export default WriteArticle;