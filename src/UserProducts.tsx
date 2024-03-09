//@ts-nocheck


import { useEffect, useState } from 'react';
import axios from 'axios';
import API_URL from './apiConfig';

const UserProducts = () => {
  const [userProducts, setUserProducts] = useState([]);
  const [userIP, setUserIP] = useState('');

  useEffect(() => {
    // Make a request to fetch the user's IP address from the server
    const fetchUserIP = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/get-user-ip`);
        setUserIP(response.data.userIP);
   
  
        // Call fetchUserProducts inside the then block
        fetchUserProducts(response.data.userIP,
            );
      } catch (error) {
        console.error('Error fetching user IP:', error);
      }
    };
  
    // Fetch user's IP address before fetching user-specific products
    fetchUserIP();
  }, []); // No need to include userIP as a dependency
  
  // Make a request to fetch user-specific products
  const fetchUserProducts = async (userIP) => {
    try {
      const response = await axios.get(`${API_URL}/products/user/${userIP}`);
      setUserProducts(response.data);

    } catch (error) {
      console.error('Error fetching user products:', error);
    }
  };
  

  return (
  

<div className="antialiased flex flex-col items-center mt-10 min-h-screen px-20">

<p className="mb-4 text-center">Hello, Product Explorer! You currently have {userProducts.length} {userProducts.length === 1 ? 'product' : 'products'}</p>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
  {userProducts.map((product) => (
    <div key={product._id} className="bg-white rounded-lg overflow-hidden shadow-md max-h-96">
      <img className="h-48 w-full object-cover object-center" src={product.image} alt={product.name} />
      <div className="p-6">
        {product.isNewProduct && (
          <div className="mb-2">
            <span className="inline-block bg-teal-200 text-teal-800 py-1 px-3 text-xs rounded-full uppercase font-semibold tracking-wide">
              New
            </span>
          </div>
        )}
        <h4 className="mt-2 font-semibold text-lg leading-tight truncate">{product.name}</h4>
        <p className="text-gray-600 text-sm mb-2">{product.description}</p>
        <div className="flex items-center mb-2">
          <span className="text-lg font-bold">${product.price}</span>
          {product.originalPrice && (
            <>
                 <span className="text-gray-600 text-sm ml-1">Original Price</span>
              <span className="text-gray-600 text-sm line-through  ml-2">${product.originalPrice}</span>
         
            </>
          )}
        </div>
        {product.discountPercentage && (
          <div className="mt-1">
            <span className="text-gray-600 text-sm">Discount: {product.discountPercentage}%</span>
          </div>
        )}
        {product.flavor && (
          <div className="mt-1">
            <span className="text-gray-600 text-sm">Flavor: {product.flavor}</span>
          </div>
        )}
      </div>
    </div>
  ))}
</div>
</div>




  
  
  );
};

export default UserProducts;
