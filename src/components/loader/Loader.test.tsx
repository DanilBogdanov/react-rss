import { render, screen } from '@testing-library/react';
import Loader from './Loader';

describe('Loader test', () => {
  beforeEach(() => {
    render(<Loader />);
  });

  test('Title is presence', () => {
    expect(screen.getByText('Loading ...')).toBeInTheDocument();
  });

  test('Spinner is presence', () => {
    expect(screen.getByAltText('spinner')).toBeInTheDocument();
  });
});
