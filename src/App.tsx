import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import AppRouter from './router/AppRouter';
import ErrorBoundary from '@/components/errorBoundary/errorBoundary';
import './App.css';

const store = setupStore();

export default function App(): JSX.Element {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  );
}
