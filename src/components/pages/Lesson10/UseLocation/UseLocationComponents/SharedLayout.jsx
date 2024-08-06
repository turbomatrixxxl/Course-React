import { Outlet } from 'react-router-dom';
import { Container, Header, Logo, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
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
          <Link to="" end>
            Home
          </Link>
          <Link to="lesson10/about">About</Link>
          <Link to="lesson10/products">Products</Link>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};
