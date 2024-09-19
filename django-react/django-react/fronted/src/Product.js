import React from 'react';
import './Product.css';
import i4 from './Image/1.jpg'
import i5 from './Image/2.jpg'
import i6 from './Image/3.jpg'
import i7 from './Image/4.jpg'
import p1 from './Image/p1.jpg'
import p2 from './Image/p2.jpg'
import p3 from './Image/p3.jpg'
import p4 from './Image/p4.jpg'
import p5 from './Image/p5.jpg'
import p6 from './Image/p6.jpg'
import p7 from './Image/p7.jpg'
import p8 from './Image/p8.jpg'
import p9 from './Image/p9.jpg'
import p10 from './Image/p10.jpg'
import f1 from './Image/f1.jpg'
import f2 from './Image/f2.jpg'
import f3 from './Image/f3.jpg'
import f4 from './Image/f4.jpg'
import veg1 from './Image/veg1.jpg'
import veg2 from './Image/veg2.jpg'

import Nav from './Nav';
const p = [
    { id: 1, name: 'Mixed Fruits Chocolates ', price: '$25', quantity: '1 Pack' ,image:i5},
    { id: 2, name: 'Organic Apple Juice Pack', price: '$15', quantity: '100 ml',image:i6 },
    { id: 3, name: 'Almond Nuts Juice Pack', price: '$32', quantity: '250 g' ,image:i4},
    { id: 4, name: 'Fresh Mango Slice Juice', price: '$25', quantity: 'Out Of Stock' ,image:i7},
    {id: 5,image: p1, name: 'Ground Nuts Oil Pack',price: '$15',quantity: '100 ml'},
    {id: 6,image: p2,name: 'Organic Litchi Juice Pack',quantity: '100 ml',price: '$25'},
    {id: 7,image: p3,name: 'Crunchy Banana Chips',quantity: ' 8 Pack',price: '$1'},
    {id: 8,image: p4,name: 'Crunchy Potato Chips',quantity: '11 Pack',price: '$25'},
    {id: 9,image: p5,name: 'Black Pepper Spice Pack',quantity: '2 Pack',price: '$32'},
    {id: 10,image: p6,name: 'Small Cardamom Spice Pack',quantity: '5 Pack',price: '$41'},
    {id: 11,image: p7,name: 'Chilli Flakes Pack',quantity: '7 Pack',price: '$29'},
    {id: 12,image: p8,name: 'Tomato Ketchup Pack',quantity: '2 pcs',price: '$9'},
    {id: 13,image: p9,name: 'Dragon fruit',quantity: '2 pcs',price: '$5'},
    {id: 14,image: p10,name:'Blue berry',quantity: '500g',price: '$25'},
    {id: 15,image: f1,name: 'Red cherry',quantity: '250g',price: '$6'},
    {id: 16,image: f2,name: 'Kwangtung Fresh',quantity: '4 Pcs',price: '$2'},
    {id: 17,image: f3,name: 'Fresh orange',quantity: '12 pcs',price: '$10'},
    {id: 18,image: f4,name: 'red guava',quantity: '2 kg',price: '$9'},
    {id: 19,image: veg1,name: 'Tomato',quantity: '500g',price: '$15'},
    {id: 20,image: veg2,name: 'Fresh Lemon',quantity: '1 kg',price: '$1'},

    
  
  ];

const ProductCard = () => {
  return (
    <>
    <Nav/>
    <div className='container'>
    <div className='App'>
    <div className='product'>
        {p.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h5>{product.name}</h5>
            <p>{product.price}</p>
            <p>{product.quantity}</p>
            <button>Add to Cart</button>
            <button>Buy now</button>
            
          </div>
        ))}
      </div>
      </div>
      </div>
  
    </>);
};

export default ProductCard;


