import React, { useState } from 'react';
import './App.css';
import './Vendor.css'
import v1 from './Image/v1.jpg'
import v2 from './Image/v2.jpg'
import v3 from './Image/v3.jpg'
import v4 from './Image/v4.jpg'

// Vendor data

const vendors = [
    {id: 1,name: 'Mira Fashion Pvt. Ltd.',sales: 587,items: { fruits: 5, vegetables: 30, snacks: 9 },image: v1},
    {id: 2,name: 'Eelna Fashion Pvt. Ltd.',sales: 428,items: { fruits: 8, vegetables: 15, snacks: 4 },image: v2},
    {id: 3,name: 'Mario Fashion Pvt. Ltd.',sales: 1024,items: { fruits: 16, vegetables: 42, snacks: 18 },image: v3},
    { id: 4,name: 'Maria Fashion Pvt. Ltd.',sales: 210,items: { fruits: 2, vegetables: 10, snacks: 3 },image: v4},
  ];


const Vendor = () => {
  const [selectedVendor, setSelectedVendor] = useState(vendors[0]);

  const handleVendorClick = (vendor) => {
    setSelectedVendor(vendor);
  };

  return (
    <div className="vendor-container">
      <div className="image-container">
        <img src={selectedVendor.image} alt={selectedVendor.name} className="vendor-image" />
      </div>
      <div className="vendor-list">
        {vendors.map((vendor) => (
          <div
            key={vendor.id}
            className={`vendor-item ${selectedVendor.id === vendor.id ? 'selected' : ''}`}
            onClick={() => handleVendorClick(vendor)}
          >
            <h3>{vendor.name}</h3>
            <p>Sales - {vendor.sales}</p>
            <p>
              Fruits ({vendor.items.fruits}) | Vegetables ({vendor.items.vegetables}) | Snacks (
              {vendor.items.snacks})
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vendor;
