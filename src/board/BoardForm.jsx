import React, { Component } from "react";
import './BoardForm.css'

/* BoardForm.js
    게시판의 주 형태.

    아직 감이 안 잡혀서 수정 중.
*/

// const articleElement = [id, title, content, lastDate];

class BoardForm extends Component{
    render(){
        return(
            <>
                <table>
                    <thead>
                        <tr>
                            <th class="articleID"> 게시글 id</th>
                            <th class="articleTitle"> 제목 </th>
                            <th class="lastDate"> 마지막 수정일</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="articleID"> 1 </td>
                            <td class="articleTitle"> 제목 1</td>
                            <td class="lastDate"> 수정일 1</td>
                        </tr>
                        <tr>
                            <td class="articleID"> 2 </td>
                            <td class="articleTitle"> 제목 2 </td>
                            <td class="lastDate"> 수정일 2 </td>
                        </tr>
                        <tr>
                            <td class="articleID"> 3 </td>
                            <td class="articleTitle"> 제목 3 </td>
                            <td class="lastDate"> 수정일 3 </td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
    
}

export default BoardForm;