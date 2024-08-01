import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from './RouterPages/About';
import { Homes } from './RouterPages/Homes';
import { Products } from './RouterPages/Products';
import { NotFound } from './RouterPages/NotFound';
import { Container, Header, Logo, Link } from './RouteExampleComponents';

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
          <Link to="/" end>
            Home
          </Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
      </Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homes />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};
