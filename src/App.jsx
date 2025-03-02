import "./App.css";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout.jsx";
import { lazy } from "react";
import { useSelector } from "react-redux";
import Loader from "./components/Loder/Loader.jsx";
import { selectError, selectLoading } from "./redux/cars/selector.js";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage.jsx"));
const CarDetailsPage = lazy(() =>
  import("./pages/CarDetailsPage/CarDetailsPage.jsx")
);

function App() {
  const loading = useSelector(selectLoading);
  return (
    <div>
      {loading && <Loader />}
      <Toaster />

      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CarDetailsPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
