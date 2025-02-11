// src/components/CategoryList.js
import React, { useEffect, useState } from 'react';
import { getCategories } from '../services/apiService';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const data = await getCategories();
            console.log("Fetched categories in CategoryList:", data);
            setCategories(data);
        };
        fetchCategories();
    }, []);

    return (
        <div>
            <h2>Categories</h2>
            <ul>
                {categories.map(category => (
                    <li key={category.id}>{category.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryList;
