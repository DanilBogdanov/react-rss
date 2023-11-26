import ServerErr from '@/pages/500';
import { render, screen } from '@testing-library/react';

describe('Server error test', () => {
  test('Server error is displayed.', async () => {
    render(<ServerErr />);

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
});
