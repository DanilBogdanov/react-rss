import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import PageLink from './PageLink';

describe('PageLink test', () => {
  const testUrl = new URL('http://localhost');

  test('Link displayed.', () => {
    render(
      <MemoryRouter>
        <PageLink url={testUrl} page={1} title={'test'} isActive={false} />;
      </MemoryRouter>
    );

    expect(screen.getByTestId('page-link')).toBeInTheDocument();
  });

  test('Link active displayed.', () => {
    render(
      <MemoryRouter>
        <PageLink url={testUrl} page={5} title={'test'} isActive={true} />;
      </MemoryRouter>
    );

    expect(screen.getByTestId('page-link')).toBeInTheDocument();
  });
});
