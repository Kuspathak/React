// ProductContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import data from '../data/data';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch or set data from your datAa.js file
    setProducts(data);
  },[]);

  const updateSearchTerm = (term) => {
    setSearchTerm(term);
  };

  const updateSelectedCategory = (newCategory) => {
    setSelectedCategory(newCategory);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        updateSearchTerm,
        searchTerm,
        selectedCategory,
        updateSelectedCategory
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProduct must be used within a ProductProvider');
  }
  return context;
};
