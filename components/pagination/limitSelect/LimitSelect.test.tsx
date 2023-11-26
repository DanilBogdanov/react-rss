import { render, screen } from '@testing-library/react';
import LimitSelect from './LimitSelect';

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

describe('LimitSelect test', () => {
  const testUrl = 'http://localhost';

  test('Limit displayed.', () => {
    render(<LimitSelect currentLimit={20} url={testUrl} />);

    expect(screen.getByTestId('limit-select')).toBeInTheDocument();
  });
});
