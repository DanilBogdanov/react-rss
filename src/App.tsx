import ErrorBoundary from './components/errorBoundary/errorBoundary';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import CharacterPage from './components/characterPage/CharacterPage';
import './App.css';

export default function App(): JSX.Element {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Layout />}>
            <Route path='character/:id' element={<CharacterPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
