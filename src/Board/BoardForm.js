import React from "react";

/* BoardForm.js
    게시판의 주 형태.

    아직 감이 안 잡혀서 수정 중.
*/

const col = ["id", "title", "lastDate"];

function BoardForm(){
    return(
        <>
            <table>
                <thead>
                    <th> 작성자 </th>
                    <th> 제목 </th>
                    <th> 수정 일자</th>
                </thead>

                <tbody>
                    /* 내용 */
                </tbody>
            </table>
        </>
    )
}

export default BoardForm;