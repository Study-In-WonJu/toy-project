import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home'
import MainBoard from './board/MainBoard';
import WriteArticle from './article/WriteArticle';
import ReadArticle from './article/ReadArticle';

/* App.js
    Link를 위한 Route들을 모아둠.
    Home, MainBoard, WriteArticle, ReadArticle 연결.
*/

function App() {
  return (
    <>
      <Routes>
        <Route path="./Home" element={<Home/>}/>
        <Route path="./board/MainBoard" element={<MainBoard/>}/>
        <Route path="./article/WriteArticle" element={<WriteArticle/>}/>
        <Route path="./article/ReadArticle" element={<ReadArticle/>}/>
      </Routes>
    </>
  )
}

export default App;
