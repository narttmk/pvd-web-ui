import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  createProduct,
  deleteProduct,
  fetchProducts,
  publishProduct,
  updateProduct,
} from "../api/product";

export interface IProduct {}

export const useProducts = () => {
  return useQuery("Products", fetchProducts);
};

export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(createProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries("Products");
    },
  });
};

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(updateProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries("Products");
    },
  });
};

export const usePublishProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(publishProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries("Products");
    },
  });
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries("Products");
    },
  });
};
// Similarly, create hooks for updateCategorie and deleteCategorie
