import { Route, Routes } from 'react-router-dom';
import { About } from '../pages/About';
import { Home } from '../pages/Home';
import { ProductDetails } from '../pages/ProductDetails';
import { Products } from '../pages/Products';
import { Mission } from './Mission';
import { Team } from './Team';
import { Reviews } from './Reviews';
import { Container, Header, Logo, Link } from './ImbricatedRoutes.styled';

export const ImbricatedRoutes = () => {
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
          <Link to="lesson9/" end>
            Home
          </Link>
          <Link to="lesson9/about">About</Link>
          <Link to="lesson9/products">Products</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="lesson9/" element={<Home />} />
        <Route path="lesson9/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="lesson9/products" element={<Products />} />
        <Route path="lesson9/products/:id" element={<ProductDetails />} />
      </Routes>
    </Container>
  );
};
