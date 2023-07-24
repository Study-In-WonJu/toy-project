import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./BoardList.css"

const serverUrl = "http://localhost:8080/article"
/* BoardForm.js
    게시판의 주 형태.
*/


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

            <table>
                <thead/>

                <tbody>
                    {boardList && boardList.map((board) => (
                        <tr key={board.articleId}>
                            <Link to = {'/article/' + board.articleId}>
                                {board.title}
                            </Link>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default BoardList;