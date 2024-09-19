import React from "react";
import "./Nav.css"; // The CSS will be in this file
import i1 from './Image/loader.png'
import { useLocation, useNavigate } from "react-router-dom";
const Nav = () => {

  const navigate =useNavigate()
  const query = new URLSearchParams(useLocation().search);
  const username = query.get('username');
  const email = query.get('email');  


  return (
    
    <>
    <div className="n-container">
      
    <div className="navbar">
      <div className="navbar-bottom">
        <div className="navbar-logo">
          <img src={i1} alt="Logo" />
          <h2>Blue Berry</h2>
        </div>
        

        <div className="navbar-search">
          <select>
            <option>Vegetables</option>
            <option>Fruits</option>
            <option>Dairy</option>
          </select>
          <input type="text" placeholder="Search products..." />
        </div>

        <div className="navbar-menu">
        <ul>
          <li><a href="#" onClick={()=>{navigate(`/home?username=${encodeURIComponent(username)}&email=${encodeURIComponent(email)}`)}}>Home</a></li>
          <li><a href="#" onClick={()=>{navigate(`/Categories?username=${encodeURIComponent(username)}&email=${encodeURIComponent(email)}`)}}>Categories </a></li>
          <li><a href="#" onClick={()=>{navigate(`/product?username=${encodeURIComponent(username)}&email=${encodeURIComponent(email)}`)}} >Products</a></li>
          <li><a href="#" onClick={()=>{navigate(`/about?username=${encodeURIComponent(username)}&email=${encodeURIComponent(email)}`)}}>about</a></li>
        </ul>
        </div>
      </div>

      

      
    </div>
    </div>
    </>
  );
};

export default Nav;
