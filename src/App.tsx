import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import { QueryClient, QueryClientProvider } from "react-query";
import AdminLayout from "./layouts/AdminLayout";
import { FormDrawerProvider } from "./providers/FormDrawerProvider";
import MediaPage from "./pages/MediaPage";
import ProductPage from "./pages/ProductPage";

const queryClient = new QueryClient();
const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <FormDrawerProvider>
        <Router>
          <Routes>
            <Route path="admin" element={<AdminLayout />}>
              <Route path="categories" element={<CategoryPage />} />
              <Route path="medias" element={<MediaPage />} />
              <Route path="products" element={<ProductPage />} />
            </Route>
          </Routes>
        </Router>
      </FormDrawerProvider>
    </QueryClientProvider>
  );
};

export default App;
