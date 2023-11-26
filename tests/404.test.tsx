import { render, screen } from '@testing-library/react';
import NotFound from '@/pages/404';

describe('Search page test', () => {
  test('Search page is displayed.', async () => {
    render(<NotFound />);

    expect(screen.getByRole('heading', { level: 1 }).textContent).toEqual(
      'Page Not Found'
    );
  });
});
