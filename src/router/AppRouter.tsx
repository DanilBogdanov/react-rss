import { Routes, Route } from 'react-router-dom';
import { AppRoutes } from '@/types/routes';
import MainPage from '@/pages/main/MainPage';
import UncontrolledFormPage from '@/pages/UncontrolledFormPage';
import ReactHookFormPage from '@/pages/ReactHookFormPage';
import NotFoundPage from '@/pages/NotFoundPage';
import Layout from '@/components/layout/Layout';

export default function AppRouter(): JSX.Element {
  return (
    <Layout>
      <Routes>
        <Route path={AppRoutes.Main} element={<MainPage />} />
        <Route path={AppRoutes.ReactHookForm} element={<ReactHookFormPage />} />
        <Route
          path={AppRoutes.UncontrolledForm}
          element={<UncontrolledFormPage />}
        />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
