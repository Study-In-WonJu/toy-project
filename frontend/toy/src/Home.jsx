import React, { useState } from 'react';
import './Home.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import BoardForm from './board/BoardList';
import WriteArticle from './board/WriteArticle';

/* Home.jsx
    보여지는 첫 화면.
    헤더, 게시판 이동 버튼, 푸터로 구성.
    헤더와 푸터는 layout 폴더의 Header, Footer.
*/

function Home() {
  const [mode, setMode] = useState('Home');
  let content = null;

  if(mode === 'Home'){
    content = <button onClick={() => setMode('Board')}> 게시판 </button>
  }
  else if(mode === 'Board'){
    content = 
      <>
        <BoardForm/>
        <button onClick={() => setMode('Write')}> 작성 </button>
      </>
  }
  else if(mode === 'Write'){
    content = 
    <>
      <BoardForm/>
      <WriteArticle/>
    </>
  }

  return (
    <>
      <Header now={mode}/>

      {content}
      
      <Footer now={mode}/>
    </>
  )
}

export default Home;
