import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from '@/components/errorBoundary/errorBoundary';
import './App.css';
import AppRouter from './router/AppRouter';

export default function App(): JSX.Element {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ErrorBoundary>
  );
}
