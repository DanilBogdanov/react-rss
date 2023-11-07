import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ErrorBoundary from '@/components/errorBoundary/errorBoundary';
import CharacterPage from '@/components/pages/characterPage/CharacterPage';
import SearchPage from '@/components/pages/searchPage/searchPage';
import './App.css';

export default function App(): JSX.Element {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/search' />} />
          <Route path='/search' element={<SearchPage />}>
            <Route path='character/:id' element={<CharacterPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
