import React from "react";
import i2 from './Image/hero-1.png'
import './One.css'
const One=()=>{

    return(
        <>

        <div className="hero-section" style={{marginTop:'1500px'}}>
            <div className="content">
                <div className="text-content">
                <h3>Welcome to Blue Berry</h3>
                <h1>Fresh <span className="highlighted">Vegetables</span> & Fruits</h1>
                <button className="shop-btn">Shop Now</button>
                </div>
                <div className="image-content">
                <img src={i2} alt="Fresh products" />
                </div>
            </div>
            </div>
        </>
    )
}
export default One;
