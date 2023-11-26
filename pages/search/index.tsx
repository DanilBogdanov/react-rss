import { getProducts } from '@/api/productApi';
import ProductList from '@/components/productList/ProductList';
import SearchBar from '@/components/searchBar/SearchBar';
import { ProductsResponse, SearchContext } from '@/types/api';
import { buildRequest } from '@/utils/appUtils';
import Head from 'next/head';
import styles from '@/styles/search.module.css';
import ProductPage from '@/components/productPage/ProductPage';

export const getServerSideProps = async (ctx: SearchContext) => {
  const request = buildRequest(ctx);
  const response = await getProducts(request);

  return { props: response };
};

export default function Index(response: ProductsResponse) {
  return (
    <>
      <Head>
        <title>Search Page</title>
      </Head>
      <div className={styles['search-page']}>
        <header>
          <h1 className={styles['search-page__title']}>Dummy store</h1>
          <SearchBar />
        </header>
        <main>
          <ProductList products={response} />
        </main>
      </div>
      {response.detailed && <ProductPage product={response.detailed} />}
    </>
  );
}
