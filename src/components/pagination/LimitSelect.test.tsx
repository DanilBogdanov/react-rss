import { render, screen } from '@testing-library/react';
import LimitSelect from './LimitSelect';
import { MemoryRouter } from 'react-router-dom';

describe('LimitSelect test', () => {
  const testUrl = new URL('http://localhost');

  test('Limit displayed.', () => {
    render(
      <MemoryRouter>
        <LimitSelect currentLimit={20} url={testUrl} />;
      </MemoryRouter>
    );

    expect(screen.getByTestId('limit-select')).toBeInTheDocument();
  });
});
