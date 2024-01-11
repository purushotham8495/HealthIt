// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Apps from './pages/Pharamacy/Apps';

function Medi() {
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Apps/>
  </React.StrictMode>,
  document.getElementById('root')
);
}

export default Medi;