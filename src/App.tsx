import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import theme from './app/theme';

// Layout and pages
import Layout from './app/Layout';
import HomePage from './pages/HomePage';
// import PhotosPage from './pages/PhotosPage';
// import PricesPage from './pages/PricesPage';
// import WherePage from './pages/WherePage';
// import ServicesPage from './pages/ServicesPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
