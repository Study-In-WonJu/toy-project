import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BoardDetail from './board/Article/BoardDetail';
import Home from './Home';
import UpdateArticle from './board/Article/UpdateArticle';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/article/:articleId" element={<BoardDetail/>}/>
        <Route path="/update/:articleId" element={<UpdateArticle/>}/>
      </Routes>
    </>
  )
}

export default App;
