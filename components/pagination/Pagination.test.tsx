import { render, screen } from '@testing-library/react';
import Pagination from './Pagination';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
    };
  },
}));

describe('Pagination test', () => {
  test('Pagination is displayed.', async () => {
    render(<Pagination total={100} limit={20} />);

    expect(screen.getByTestId('pagination')).toBeInTheDocument();
  });
});
