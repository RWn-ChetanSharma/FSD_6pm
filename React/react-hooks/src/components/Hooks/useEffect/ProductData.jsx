import React, { useEffect, useState } from "react";

function ProductData() {
  // useState

  const [productData, setProductData] = useState(null);

  //   productData = null
  //   setProductData(value) = productData

  // useEffect

  useEffect(() => {
    const fetchData = async () => {
      console.log("UseEffect is Running");

      try {
        const res = await fetch("https://fakestoreapi.com/products");
        console.log(res);
        const data = await res.json();
        console.log(data);
        setProductData(data);
      } catch (error) {
        console.log("Errorrrrrrrrr!");
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="container text-bg-success my-4 p-3 ">
        <h1 className="text-center">Product Data</h1>

        {productData ? (
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {productData.map((product, i) => (
                // <tr key={product.id}>
                <tr key={i}>
                  <td>{product.title.slice(0,20)}</td>
                  <td>{product.description.slice(0,80)}</td>
                  <td>{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h2>Loading....</h2>
        )}
        
      </div>
    </>
  );
}

export default ProductData;
