import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const serverUrl = "http://localhost:8080/article"

const BoardList = () =>{
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
                <thead>
                    <tr>
                        <th className = "title"> Title </th>
                        <th className = "id" > Id </th>
                    </tr>
                </thead>

                <tbody>
                    {boardList && boardList.map((board) => (
                        <tr>
                            <td key={board.articleId} className = "title">
                                <Link to = {'/article/' + board.articleId}>
                                    {board.title}
                                </Link>
                            </td>
                            <td className="id"> {board.articleId} </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default BoardList;