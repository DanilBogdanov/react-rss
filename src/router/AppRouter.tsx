import { Routes, Route, Navigate } from 'react-router-dom';
import CharacterPage from '@/components/pages/characterPage/CharacterPage';
import NotFoundPage from '@/components/pages/notFoundPage/NotFoundPage';
import SearchPage from '@/components/pages/searchPage/searchPage';

export default function AppRouter(): JSX.Element {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/search' />} />
      <Route path='/search' element={<SearchPage />}>
        <Route path='character/:id' element={<CharacterPage />} />
      </Route>
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}
