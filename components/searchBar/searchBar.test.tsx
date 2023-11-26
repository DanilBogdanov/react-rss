import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

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

describe('SearchBar test', () => {
  test('SearchBar is displayed.', async () => {
    render(<SearchBar />);

    expect(screen.getByTestId('search-bar')).toBeInTheDocument();
  });
});
