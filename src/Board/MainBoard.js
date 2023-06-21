import React from "react";
import BoardForm from './BoardForm';

/* MainBoard.js
    게시판 화면.
    홈(App)과 유사하게 헤더, 게시판, 푸터로 구성.
    각각 hr로 구별.

    게시판의 표 형태는 BoardForm.js를 사용.
*/

function MainBoard(){
    return(
        <>
            <div>
                <header> 게시판 </header>
                <hr/>
            </div>

            <BoardForm/>

            <div>
                <hr/>
                <footer> 돌아가기</footer>
            </div>
        </>
    )
}

export default MainBoard