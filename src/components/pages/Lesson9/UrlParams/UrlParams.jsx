import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import { Abouts } from './UrlParamsPages/Abouts';
import { Homess } from './UrlParamsPages/Homess';
// import { ProductDetails } from './UrlParamsPages/ProductDetails';
// import { Productss } from './UrlParamsPages/Productss';
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
          <Link to="/homess" end>
            Home
          </Link>
          <Link to="/abouts">About</Link>
          <Link to="/productss">Products</Link>
        </nav>
      </Header>
      <Homess />
      {/* <Routes>
        <Route path="/homess" element={<Homess />} />
        <Route path="/abouts" element={<Abouts />} />
        <Route path="/productss" element={<Productss />} />
        <Route path="/productss/:id" element={<ProductDetails />} />
      </Routes> */}
      <Outlet />
    </Container>
  );
};
