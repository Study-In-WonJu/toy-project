import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Header from './layout/Header';
import Footer from './layout/Footer';

/* Home.jsx
    보여지는 첫 화면.
    헤더, 게시판 이동 버튼, 푸터로 구성.
    헤더와 푸터는 layout 폴더의 Header, Footer.
*/

function Home() {
  return (
    <>
      <Header now="Home"/>

      <Link to = "./Board/MainBoard"> 
        <button> 게시판 이동 </button>
      </Link>

      <Footer/>
    </>
  )
}

export default Home;
