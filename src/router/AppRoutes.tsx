import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout/MainLayout';
import HomePage from '../pages/HomePage/HomePage';
import GamePage from '@src/pages/GamePage/GamePage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to="home" />} />
        <Route path="home" element={<HomePage />} />
        <Route path="game" element={<GamePage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
