// src/App.js
import React from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import CategoryList from './components/CategoryList';

const App = () => {
    return (
        <div>
            <h1>Inventory Management System</h1>
            <ProductForm />
            <ProductList />
            <CategoryList />
        </div>
    );
};

export default App;
