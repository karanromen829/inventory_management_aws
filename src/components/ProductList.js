// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/apiService';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getProducts();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.name} - Quantity: {product.quantity} - Price: ${product.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
