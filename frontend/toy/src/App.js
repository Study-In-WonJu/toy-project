import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BoardDetail from './board/Article/BoardDetail';
import Home from './Home';
import UpdateArticle from './board/Article/UpdateArticle';
import UpdateComment from './board/Comment/UpdateComment';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/article/:articleId" element={<BoardDetail/>}/>
        <Route path="/update/:articleId" element={<UpdateArticle/>}/>
        <Route path="/update/comment/:commentId" element={<UpdateComment/>}/>
      </Routes>
    </>
  )
}

export default App;
