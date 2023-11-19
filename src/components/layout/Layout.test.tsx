import { render, screen } from '@testing-library/react';
import Layout from './Layout';

describe('Layout test', () => {
  const Child = () => <div data-testid='child'></div>;
  const layout = (
    <Layout>
      <Child />
    </Layout>
  );

  beforeEach(() => {
    render(layout);
  });

  test('Layout is presence', () => {
    expect(screen.getByTestId('layout')).toBeInTheDocument();
  });

  test('Layout has children', () => {
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });
});
