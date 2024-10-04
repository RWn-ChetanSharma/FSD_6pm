import React from 'react'
import banner from '../assets/banner.jpg'
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'
function Slider() {
  return (
    <>
    <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={banner} className="d-block w-100 img" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={banner1}className="d-block w-100 img" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={banner2} className="d-block w-100 img" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    
    </>
  )
}

export default Slider