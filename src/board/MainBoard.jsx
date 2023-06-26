import React from "react";
import BoardForm from './BoardForm';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

/* MainBoard.js
    게시판 화면.
    헤더, 게시판, 푸터로 구성.

    게시판의 표 형태는 BoardForm.js를 사용.
*/

const MainBoard = () => {
    return(
        <>
            <Header now="MainBoard"/>

            <BoardForm/>
            
            <Footer/>
        </>
    )
}

export default MainBoard