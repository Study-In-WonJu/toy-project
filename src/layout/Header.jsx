import React from 'react';
import './Layout.css';

/* Header.jsx
    모든 화면의 헤더.
    전달 받은 props를 헤더에 띄움.
    헤더 아래의 hr도 포함됨.
*/

function Header(props){
    return(
        <div>
            <header> {props.now} </header>
            <hr/>
        </div>
    )
}

export default Header;