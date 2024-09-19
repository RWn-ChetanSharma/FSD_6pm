import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css'; // Assuming you will add styles here
import './Home.css';
import i3 from './Image/category.jpg'
import i4 from './Image/1.jpg'
import i5 from './Image/2.jpg'
import i6 from './Image/3.jpg'
import i7 from './Image/4.jpg'
import one from './Image/one.png'
import two from './Image/two.png'
import s1 from './Image/s1.png'
import s2 from './Image/s2.png'
import s3 from './Image/s3.png'
import s4 from './Image/s4.png'
import v1 from './Image/v1.jpg'
import v2 from './Image/v2.jpg'
import v3 from './Image/v3.jpg'
import v4 from './Image/v4.jpg'
import a1 from './Image/a1.jpg'
import a2 from './Image/a2.jpg'
import a3 from './Image/a3.jpg'
import a4 from './Image/a4.jpg'
import Nav from './Nav'
import One from './One';
import Vendor from './Vendor';




const products = [
  { id: 1, name: 'Mixed Fruits Chocolates Pack', price: '$25', quantity: '1 Pack' ,url:i5},
  { id: 2, name: 'Organic Apple Juice Pack', price: '$15', quantity: '100 ml',url:i6 },
  { id: 3, name: 'Almond Nuts Juice Pack', price: '$32', quantity: '250 g' ,url:i4},
  { id: 4, name: 'Fresh Mango Slice Juice', price: '$25', quantity: 'Out Of Stock' ,url:i7},
];


const vendors = [
  {id: 1,name: 'Mira Fashion Pvt. Ltd.',sales: 587,items: { fruits: 5, vegetables: 30, snacks: 9 },image: v1},
  {id: 2,name: 'Eelna Fashion Pvt. Ltd.',sales: 428,items: { fruits: 8, vegetables: 15, snacks: 4 },image: v2},
  {id: 3,name: 'Mario Fashion Pvt. Ltd.',sales: 1024,items: { fruits: 16, vegetables: 42, snacks: 18 },image: v3},
  { id: 4,name: 'Maria Fashion Pvt. Ltd.',sales: 210,items: { fruits: 2, vegetables: 10, snacks: 3 },image: v4},
];



const images=[{
  "id": 1,
  "url": one,
  "title": "Tasty Snack & Fast food",
  "subtitle": "The flavour of something special",
  "buttonText": "Shop Now"
},
{
  "id": 2,
  "url": two,
  "title": "Fresh Fruits & Vegetables",
  "subtitle": "A healthy meal for everyone",
  "buttonText": "Shop Now"
}]

const services = [
  { imgSrc: s1, title: 'Free Shipping', description: 'Free shipping on all US orders above $200' },
  { imgSrc: s2, title: '24x7 Support', description: 'Contact us 24 hours a day, 7 days a week' },
  { imgSrc: s3, title: '30 Days Return', description: 'Simply return it within 30 days for an exchange' },
  { imgSrc: s4, title: 'Payment Secure', description: 'Contact us 24 hours a day, 7 days a week' },
];

const img = [
  { id: 1, src: a1, alt: 'Image 1',title: 'Marketing Guide: 5 Steps to Success.',date: 'June 30, 2024'},
  { id: 2, src: a2, alt: 'Image 2',title: 'Best way to solve business deal issue.',date: 'May 10, 2023'},
  { id: 3, src: a3, alt: 'Image 3',title: 'Business ideas to grow your business.', date: 'Jan 10, 2022'},
  { id: 4, src: a4, alt: 'Image 4',title: '31 customer stats you should know in 2020.',date: 'Feb 12, 2022'},
  
];





const Home = () => {

  const navigate = useNavigate()
  const gotoproduct=()=>{
    navigate('/product')
  }

  const [selectedVendor, setSelectedVendor] = useState(vendors[0]);

  const handleVendorClick = (vendor) => {
    setSelectedVendor(vendor);
  };

  return (
    <>
    <Nav />
    
    <div className='container1'>
      <div className="categories-section" style={{marginTop:'1670px'}}>
        <One />
        <div className="content1">
          <div className="image-content1">
            <img src={i3} alt="Woman with grocery cart"/>
              <div className="discount-badge">50% Off</div>
          </div>
          <div className="text-content">
            <h1>
              Explore <span className="highlighted">Categories</span>
            </h1>
          </div>
        </div>
      </div>
    

        <div className="categories">
          <div className="category-card">
            <div className="icon">
              🍒
            </div>
            <h3><a href='#' className='text color'>Fruits</a></h3>
          
          </div>
          <div className="category-card">
            <div className="icon">
              🥤
            </div>
            <h3><a href='#' className='text color'>Cold drinks</a></h3>
            
          </div>
          <div className="category-card">
            <div className="icon">
              🧁
            </div>
            <h3><a href='#' className='text color'>Bakery</a></h3>
          </div>
          <div className="category-card">
            <div className="icon">
              🥕
            </div>
            <h3><a href='#' className='text color'>Vegetables</a></h3>
            
          </div>
        </div>
      
    
    <div className='App'>
      <main className="product-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.url} alt={product.name} />
              <h5>{product.name}</h5>
              <p>{product.price}</p>
              <p>{product.quantity}</p>
              <button>Add to Cart</button>
              <button>buy now</button>
              
            </div>
          ))}
        </main>
    </div>

    
    <div className="cards-container">
      <div className="card">
        <img
          src={one} // Replace with your image URL
          alt="Tasty Snack & Fast Food"
          className="card-image"
        />
        <div className="card-content">
          <h3>Tasty Snack & Fast Food</h3>
          <p>The flavour of something special</p>
          <button className="shop-button" onClick={()=>{navigate('/product')}}>Shop Now</button>
        </div>
      </div>

      <div className="card">
        <img
          src={two} // Replace with your image URL
          alt="Fresh Fruits & Vegetables"
          className="card-image"
        />
        <div className="card-content">
          <h3>Fresh Fruits</h3>
          <p>A healthy meal for everyone</p>
          <button className="shop-button" onClick={()=>{navigate('/product')}}>Shop Now</button>
        </div>
      </div>
    </div>

  
    <div className="service-container">
      {services.map((service, index) => (
        <div key={index} className="service-item">
          <img src={service.imgSrc} alt={service.title} className="service-image" />
          <div className="title">{service.title}</div>
          <div className="description">{service.description}</div>
        </div>
      ))}
    </div>

      <Vendor/>


      <div className="image-grid">
      {img.map((image) => (
        <div key={image.id} className="image-wrapper">
          <div className="text-overlay">
            <p>{image.date}</p>
            <h3>{image.title}</h3>
          </div>
          <img src={image.src} alt={image.alt} className="hover-image" />
        </div>
      ))}
    </div>


    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>
            Heaven fruitful doesn't over lesser days appear creeping seasons so behold bearing days open.
          </p>
          <div className="logo">
            <h2>Blue Berry</h2>
            <p>HOME SOLUTION</p>
          </div>
        </div>

        <div className="footer-column">
          <h3>Contact Info</h3>
          <p>Your address goes here, your demo address.</p>
          <p>Phone: +8880 44338899</p>
          <p>Email: info@domain.com</p>
        </div>

        <div className="footer-column">
          <h3>Important Link</h3>
          <ul>
            <li><a href="#whmcs">Sign in</a></li>
            <li><a href="#domain">Search Domain</a></li>
            <li><a href="#account">My Account</a></li>
            <li><a href="#cart">View Cart</a></li>
            <li><a href="#shop">Our Shop</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Newsletter</h3>
          <p>
            Heaven fruitful doesn't over lesser in days. Appear creeping seasons deve behold bearing days open.
          </p>
          <form>
            <input type="email" placeholder="Email Address" />
            <button type="submit" >Send</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright ©2022 All rights reserved </p>
        <div className="social-icons">
          <a href="#facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="#twitter"><i className="fab fa-twitter"></i></a>
          <a href="#globe"><i className="fas fa-globe"></i></a>
          <a href="#behance"><i className="fab fa-behance"></i></a>
        </div>
      </div>
    </footer>





  </div>
    </>);
};


export default Home;
