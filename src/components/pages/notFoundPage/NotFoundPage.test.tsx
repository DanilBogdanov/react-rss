import { MemoryRouter } from 'react-router-dom';
import { act, render, screen } from '@testing-library/react';
import NotFoundPage from './NotFoundPage';
import AppRouter from '@/router/AppRouter';

describe('NotFoundPage test', () => {
  test('Title is displayed', () => {
    render(<NotFoundPage />);

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Page not found'
    );
  });

  test('404 page is displayed when navigating to an invalid route', async () => {
    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/incorrectPage']}>
          <AppRouter />
        </MemoryRouter>
      );
    });

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Page not found'
    );
  });
});
