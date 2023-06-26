import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css'

/* Footer.jsx
    모든 화면에 들어가는 푸터.
    어디에서든 Home으로 돌아갈 수 있음.
*/

const Footer = () => {
    return(
        <>
            <div>
                <hr/>
                <Link to="Home">
                    <footer> back </footer>
                </Link>
            </div>
        </>
    )
}

export default Footer;