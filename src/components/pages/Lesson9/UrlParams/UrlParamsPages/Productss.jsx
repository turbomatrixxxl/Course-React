import React from 'react';
import { ProductList } from '../ProductList';
import { getProducts } from '../fakeApi';

export const Productss = () => {
  const products = getProducts();
  return (
    <main>
      <ProductList products={products} />
    </main>
  );
};
