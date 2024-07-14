import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import { QueryClient, QueryClientProvider } from "react-query";
import AdminLayout from "./layouts/AdminLayout";
import { FormDrawerProvider } from "./providers/FormDrawerProvider";
import MediaPage from "./pages/MediaPage";

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
            </Route>
          </Routes>
        </Router>
      </FormDrawerProvider>
    </QueryClientProvider>
  );
};

export default App;
