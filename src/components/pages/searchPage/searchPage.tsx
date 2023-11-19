import { Outlet, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import SearchBar from '@/components/searchBar/SearchBar';
import ProductList from '@/components/productList/ProductList';
import './searchPage.css';

export default function SearchPage(): JSX.Element {
  const navigate = useNavigate();

  function onClick() {
    const url = new URL(location.href);
    url.pathname = 'search';
    navigate(`${url.pathname}${url.search}`);
  }

  return (
    <Layout>
      <div className='search-page' onClick={onClick}>
        <header>
          <h1>Dummy store</h1>
          <SearchBar />
        </header>
        <main>
          <ProductList />
        </main>
      </div>
      <Outlet />
    </Layout>
  );
}
