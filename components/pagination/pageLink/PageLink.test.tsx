import { render, screen } from '@testing-library/react';
import PageLink from './PageLink';

describe('PageLink test', () => {
  const testUrl = 'http://localhost/search';

  test('Link displayed.', () => {
    render(<PageLink url={testUrl} page={1} currentPage={1} />);

    expect(screen.getByTestId('page-link')).toBeInTheDocument();
  });

  test('Link active displayed.', () => {
    render(<PageLink url={testUrl} page={1} currentPage={1} />);

    expect(screen.getByTestId('page-link')).toBeInTheDocument();
  });
});
