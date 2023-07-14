import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

/* index.js
   App과 Home을 렌더링.
   App에는 Route들이 있고, Home에는 첫 화면이 나옴.
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </>
);