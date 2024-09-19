import './App.css';
import Home from './Home.js';
import Product from './Product.js'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Login from './product/Login.js';
import Signup from './product/Signup.js'
function App() {
  return (
    <>
    
      <Router>
      <Routes>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/" element={<Login/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/admin/login" element={<Login/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

