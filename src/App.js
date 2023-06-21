import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import MainBoard from './Board/MainBoard';

/* App.js
    게시판의 홈 화면.
    이 페이지를 통해 게시판으로 이동할 수 있음. 
*/

/* App()
    헤더, 게시판 이동 버튼, 푸터로 구성.
    각각 hr로 분할.
    게시판 이동 버튼을 통해 게시판(MainBoard)으로 이동.
 */
function App() {
  return (
    <>
      <div>
        <header> Header </header>
        <hr/>
      </div>

      <Routes>
        <Route path="./Board/MainBoard" element={<MainBoard/>}/>
      </Routes>

      <Link to = "./Board/MainBoard"> 
        <button> 게시판 이동 </button>
      </Link>

      <div>
        <hr/>
        <footer> Footer </footer>
      </div>
    </>
  )
}

export default App;
