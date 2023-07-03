import React, { useState, useEffect } from "react";
import axios from "axios";
import BoardDetail from "./BoardDetail";

const serverUrl = "http://localhost:8080/article"
/* BoardForm.js
    게시판의 주 형태.
*/

//articleElement = [id, title, content, lastDate]

function BoardList(){
    const [boardList, setBoardList] = useState([])

    const getBoardList = async () => {
        const res = await (await axios.get(serverUrl)).data
        setBoardList(res.data)
        console.log(res.data)
    }

    useEffect(() => {
        getBoardList()
    }, [])

    return(
        <>
            <p> 게시판 목록 </p>
            {/* <ul>
                <li key={board.idx}>
                    <Link to={`/board/${board.idx}`}>{board.title}</Link>
                </li>
            </ul> */}
        </>
    )
}

export default BoardList;