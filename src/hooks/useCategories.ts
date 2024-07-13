import { useQuery, useMutation, useQueryClient } from "react-query";
import { fetchcategories, createCategory, deleteCategory, updateCategory } from "../api/category";

export interface ICategory {

}

export const useCategories = () => {
  return useQuery("Categories", fetchcategories);
};

export const useCreateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation(createCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries("Categories");
    },
  });
};

export const useUpdateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation(updateCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries("Categories");
    },
  });
};

export const useDeleteCategory = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries("Categories");
    },
  });
};
// Similarly, create hooks for updateCategorie and deleteCategorie
