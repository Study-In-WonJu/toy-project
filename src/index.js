import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import { BrowserRouter } from 'react-router-dom';


/* index.js
   App과 연동시킴.
   첫 화면에 바로 App.js로 이동.
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </>
);