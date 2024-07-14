import axios from "axios";

export const fetchProducts = async () => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/admin/products`
  );
  return response.data.data;
};

export const createProduct = async (product: any) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/admin/products`,
    product
  );
  return response.data;
};

export const updateProduct = async (product: any) => {
  const response = await axios.patch(
    `${import.meta.env.VITE_API_URL}/admin/products/${product.id}`,
    product
  );
  return response.data;
};

export const publishProduct = async (id: string) => {
  const response = await axios.put(
    `${import.meta.env.VITE_API_URL}/admin/products/${id}/publish`
  );
  return response.data;
};

export const deleteProduct = async (id: string) => {
  const response = await axios.delete(
    `${import.meta.env.VITE_API_URL}/admin/products/${id}`
  );
  return response.data;
};
