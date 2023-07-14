import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const serverUrl = "http://localhost:8080/article"
/* BoardForm.js
    게시판의 주 형태.
*/

//articleElement = [id, title, content, lastDate]

function BoardList(){
    const [boardList, setBoardList] = useState([])

    const getBoardList = async()  => {
        axios.get(serverUrl
        ).then(res =>{
            if(res.status === 200){
                setBoardList(res.data)
            }
            else{
                alert(res.message)
            }
        }).catch((err) => {
            alert(err.message)
        })
    }

    useEffect(() => {
        getBoardList()
    }, [])

    return(
        <>
            <p> 게시판 목록 </p>
            <div>
                <ul>
                    {boardList && boardList.map((board) => (
                        <li key={board.articleId}>
                            <Link to = {'article/${board.articleId}'}>
                                {board.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default BoardList;