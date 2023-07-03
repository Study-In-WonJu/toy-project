import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home'
import WriteArticle from './board/WriteArticle';
import BoardDetail from './board/BoardDetail'

/* App.js
    Link를 위한 Route들을 모아둠.
    Home, MainBoard, WriteArticle, 게시글 연결.
*/

function App() {
  return (
    <>
      <Routes>
        <Route path="./Home" element={<Home/>}/>
        <Route path="/article/WriteArticle" element={<WriteArticle/>}/>
        <Route path='/article/WrtieArticle/:idx' element={<BoardDetail/>}/>
      </Routes>
    </>
  )
}

export default App;
