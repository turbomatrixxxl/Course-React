import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Abouts } from './UrlParamsPages/Abouts';
import { Homess } from './UrlParamsPages/Homess';
import { ProductDetails } from './UrlParamsPages/ProductDetails';
import { Productss } from './UrlParamsPages/Productss';
import { Container, Header, Logo, Link } from './UrlParamsComponent';
import { Outlet } from 'react-router-dom';

export const UrlParams = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{' '}
          GoMerch Store
        </Logo>
        <nav>
          <Link to="lesson9/homess">Home</Link>
          <Link to="lesson9/abouts">About</Link>
          <Link to="lesson9/productss">Products</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="lesson9/homess" element={<Homess />} />
        <Route path="lesson9/abouts" element={<Abouts />} />
        <Route path="lesson9/productss" element={<Productss />} />
        <Route path="lesson9/productss/:id" element={<ProductDetails />} />
      </Routes>
      <Outlet />
    </Container>
  );
};
