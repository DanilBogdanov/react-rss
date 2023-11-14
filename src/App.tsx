import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import ErrorBoundary from '@/components/errorBoundary/errorBoundary';
import './App.css';

export default function App(): JSX.Element {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ErrorBoundary>
  );
}
