// src/components/ProductForm.js
import React, { useState, useEffect } from 'react';
import { addProduct, getCategories } from '../services/apiService';

const ProductForm = () => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const data = await getCategories();
            console.log("Fetched categories:", data);
            setCategories(data);
        };
        fetchCategories();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newProduct = { name, quantity, price, category_id: categoryId };
        await addProduct(newProduct);
        setName('');
        setQuantity('');
        setPrice('');
        setCategoryId('');
        alert('Product added successfully');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Product</h2>
            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Product Name" required />
            <input type="number" value={quantity} onChange={e => setQuantity(e.target.value)} placeholder="Quantity" required />
            <input type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder="Price" required />
            <select value={categoryId} onChange={e => setCategoryId(e.target.value)} required>
                <option value="">Select Category</option>
                {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                ))}
            </select>
            <button type="submit">Add Product</button>
        </form>
    );
};

export default ProductForm;
