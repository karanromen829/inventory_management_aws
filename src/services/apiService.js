// // src/services/apiService.js
// import axios from 'axios';

// const API_URL = 'http://localhost:5000/api';

// // Get all products
// export const getProducts = async () => {
//     const response = await axios.get(`${API_URL}/products`);
//     return response.data;
// };

// // Add a new product
// export const addProduct = async (product) => {
//     const response = await axios.post(`${API_URL}/products`, product);
//     return response.data;
// };

// // Get all categories
// export const getCategories = async () => {
//     const response = await axios.get(`${API_URL}/categories`);
//     return response.data;
// };

// src/services/apiService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';


export const getProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/products`);
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        return []; // Return an empty array if there's an error
    }
};

export const addProduct = async (product) => {
    const response = await axios.post(`${API_URL}/products`, product);
    return response.data;
};

export const getCategories = async () => {  // Ensure getCategories is exported as shown here
    const response = await axios.get(`${API_URL}/categories`);
    return response.data;
};
