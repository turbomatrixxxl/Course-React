import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';

// import { About } from '../pages/About';
// import { Home } from '../pages/Home';
// import { ProductDetails } from '../pages/ProductDetails';
// import { Products } from '../pages/Products';
// import { Mission } from './Mission';
// import { Team } from './Team';
// import { Reviews } from './Reviews';

const About = lazy(() => import('../pages/About'));
console.log(About);

const Home = lazy(() => import('../pages/Home'));
console.log(Home);

const ProductDetails = lazy(() => import('../pages/ProductDetails'));
console.log(ProductDetails);

const Products = lazy(() => import('../pages/Products'));
console.log(Products);

const Mission = lazy(() => import('./Mission'));
console.log(Mission);

const Team = lazy(() => import('./Team'));
console.log(Team);

const Reviews = lazy(() => import('./Reviews'));
console.log(Reviews);

export const LazySuspense = () => {
  return (
    <Routes>
      <Route path="lesson10/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="lesson10/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="lesson10/products" element={<Products />} />
        <Route path="lesson10/products/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
};
