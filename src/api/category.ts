import axios from "axios";

const API_URL = "http://localhost:3000/api";

export const fetchcategories = async () => {
  const response = await axios.get(`${API_URL}/admin/categories`);
  console.log(response);
  return response.data.data;
};

export const createCategory = async (category: any) => {
  const response = await axios.post(`${API_URL}/admin/categories`, category);
  return response.data;
};

export const updateCategory = async (category: any) => {
  const response = await axios.patch(
    `${API_URL}/admin/categories/${category.id}`,
    category
  );
  return response.data;
};

export const deleteCategory = async (id: string) => {
  const response = await axios.delete(`${API_URL}/admin/categories/${id}`);
  return response.data;
};

// Add updateProduct and deleteProduct methods similarly
