import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import './Home.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import BoardList from './board/BoardList';

const serverUrl = "http://localhost:8080/article"

/* Home.jsx
    헤더, 게시판 이동 버튼, 푸터로 구성.
    헤더와 푸터는 layout 폴더의 Header, Footer.
*/

function Home() {
  const [mode, setMode] = useState('Board');
  let mainContent = null;
  const navigate = useNavigate()

  const [article, setArticle] = useState({
      title: '',
      content: ''
    })
  
  const {title, content} = article;

  const config =  {
    headers: {
      "Content-Type": "application/json"
    } 
  }

  const onChange = (event) => {
    setArticle({
        ...article,
        [event.target.name]: event.target.value,
    })
  }
  
  const saveArticle = ()  => {
    axios.post(serverUrl, JSON.stringify(article), config
    ).then(res =>{
        if(res.status === 201){
          alert("작성 완료")
          setMode('Board')
          const articleUrl = res.headers.location
          navigate(articleUrl)
        }
        else{
            alert(res.message)
        }
    }).catch((err) => {
        alert(err.message)
    })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    saveArticle()
  }

  if(mode === 'Board'){
    mainContent = 
      <>
        <BoardList/>
        <button onClick={() => setMode('Write')}> 작성 </button>
      </>
  }
  else if(mode === 'Write'){
    mainContent = 
      <form onSubmit={handleSubmit}>
        <p><input type="text" name="title" value={title} onChange={onChange}/></p>
        <p><textarea name="content" value={content} onChange={onChange}/></p>
        <input type="submit" value="게시"/>
      </form>
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
