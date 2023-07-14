import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BoardDetail from './board/BoardDetail';
import Home from './Home';

/* App.js
    Link를 위한 Route들을 모아둠.
*/

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/article/:articleId" element={<BoardDetail/>}/>
      </Routes>
    </>
  )
}

export default App;
