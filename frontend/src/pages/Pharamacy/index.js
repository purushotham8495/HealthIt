import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Apps from "./Apps";


function Index() {
   
ReactDOM.render(
    <React.StrictMode>
      {/* <App /> */}
      <Apps/>
    </React.StrictMode>,
    document.getElementById('root')
  );
  
}
export default Index;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Apps />);




// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css'; // Include global styles
// import App from './App';
// // import Apps from './pages/Pharamacy/Apps';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//     {/* <Apps/> */}
//   </React.StrictMode>,
//   document.getElementById('root')
// );
