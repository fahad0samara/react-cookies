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
        console.log(response.data.userIP, "response.data.userIP");
  
        // Call fetchUserProducts inside the then block
        fetchUserProducts(response.data.userIP);
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
      console.log(response.data, "response.data");
    } catch (error) {
      console.error('Error fetching user products:', error);
    }
  };
  

  return (
    <div className="max-w-3xl mx-auto mt-8 p-4">
    <h2 className="text-2xl font-bold mb-4">Your Products</h2>
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {userProducts.map((product) => (
        <li key={product._id} className="border border-gray-300 p-4 rounded-md">
          <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-4">{product.description}</p>
  
          <img className="w-full h-48 object-cover mb-4" src={product.image} alt={product.name} />
  
          <div className="flex flex-wrap mb-4">
            <strong className="w-full sm:w-1/2 mb-2">Price:</strong>
            <span className="w-full sm:w-1/2">${product.price}</span>
  
            <strong className="w-full sm:w-1/2 mb-2">Original Price:</strong>
            <span className="w-full sm:w-1/2">${product.originalPrice || 'N/A'}</span>
  
            <strong className="w-full sm:w-1/2 mb-2">Discount Percentage:</strong>
            <span className="w-full sm:w-1/2">{product.discountPercentage || 'N/A'}%</span>
  
            <strong className="w-full sm:w-1/2 mb-2">Flavor:</strong>
            <span className="w-full sm:w-1/2">{product.flavor || 'N/A'}</span>
  
            <strong className="w-full sm:w-1/2 mb-2">Is New Product:</strong>
            <span className="w-full sm:w-1/2">{product.isNewProduct ? 'Yes' : 'No'}</span>
          </div>
        </li>
      ))}
    </ul>
  </div>
  
  );
};

export default UserProducts;
