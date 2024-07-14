import axios from "axios";

export const fetchcategories = async () => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/admin/categories`
  );
  return response.data.data;
};

export const createCategory = async (category: any) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/admin/categories`,
    category
  );
  return response.data;
};

export const updateCategory = async (category: any) => {
  const response = await axios.patch(
    `${import.meta.env.VITE_API_URL}/admin/categories/${category.id}`,
    category
  );
  return response.data;
};

export const publishCategory = async (id: string) => {
  const response = await axios.put(
    `${import.meta.env.VITE_API_URL}/admin/categories/${id}/publish`
  );
  return response.data;
};

export const deleteCategory = async (id: string) => {
  const response = await axios.delete(
    `${import.meta.env.VITE_API_URL}/admin/categories/${id}`
  );
  return response.data;
};
