import { Route, Routes } from 'react-router-dom';
import { About } from '../pages/About';
import { Home } from '../pages/Home';
import { ProductDetails } from '../pages/ProductDetails';
import { Products } from '../pages/Products';
import { Mission } from './Mission';
import { Team } from './Team';
import { Reviews } from './Reviews';
import { SharedLayout } from './SharedLayout';

export const SearchParams = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
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
