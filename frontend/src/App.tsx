import { Routes, Route } from 'react-router-dom';
import DashboardPage from "@/pages/DashboardPage";
import CatalogDetailPage from "@/pages/catalog/CatalogDetailPage";
import MainLayout from "@/components/atomics/layouts/MainLayout";
import "./App.css";

const App = () => (
  <Routes>
    <Route element={<MainLayout />}>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/catalog/:asin" element={<CatalogDetailPage />} />
    </Route>
  </Routes>
);

export default App;
