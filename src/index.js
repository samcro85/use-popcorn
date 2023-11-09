import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
// import StarRating from "./components/StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StarRating maxRating={5} message={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}/> */}
    <App />
    {/* <StarRating color="purple" size={24} className='test' defaultRating={3}/> */}
  </React.StrictMode>
);
