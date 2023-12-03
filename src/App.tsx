import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from '@/components/errorBoundary/ErrorBoundary';
import AppRouter from '@/router/AppRouter';
import '@/App.css';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App(): JSX.Element {
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

export default App;
