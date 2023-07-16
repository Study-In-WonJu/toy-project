import React, { useState } from 'react';
import './Home.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import BoardList from './board/BoardList';
import WriteArticle from './board/WriteArticle';


/* Home.jsx
    헤더, 게시판 이동 버튼, 푸터로 구성.
    헤더와 푸터는 layout 폴더의 Header, Footer.
*/

function Home() {
  const [mode, setMode] = useState('Board');
  let mainContent = null;

  if(mode === 'Board'){
    mainContent = 
      <>
        <BoardList/>
        <button onClick={() => setMode('Write')}> 작성 </button>
      </>
  }
  else if(mode === 'Write'){
    mainContent = 
    <>
      <WriteArticle/>
    </>
  }

  return (
    <>
      <Header now={mode}/>

      {mainContent}
      
      <Footer/>
    </>
  )
}

export default Home;
