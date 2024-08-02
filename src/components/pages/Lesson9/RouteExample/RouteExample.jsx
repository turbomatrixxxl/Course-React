import { Homes } from './RouterPages/Homes';
import { Container, Header, Logo, Link } from './RouteExampleComponents';
import { Outlet, Route, Routes } from 'react-router-dom';
import { About } from './RouterPages/About';
import { Products } from './RouterPages/Products';
import { NotFound } from './RouterPages/NotFound';

export const RouteExample = () => {
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
          <Link to="lesson9/homes">Home</Link>
          <Link to="lesson9/about">About</Link>
          <Link to="lesson9/products">Products</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="lesson9/homes" element={<Homes />} />
        <Route path="lesson9/about" element={<About />} />
        <Route path="lesson9/products" element={<Products />} />
        <Route path="lesson9/*" element={<NotFound />} />
      </Routes>
      <Outlet />
    </Container>
  );
};
