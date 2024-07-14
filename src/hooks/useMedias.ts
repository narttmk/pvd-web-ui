import { useMutation, useQuery, useQueryClient } from "react-query";
import { deleteMedia, fetchMedias, uploadMedia } from "../api/media";

export const useMedias = () => {
  return useQuery("Medias", fetchMedias);
};

export const useUploadMedia = () => {
  const queryClient = useQueryClient();
  return useMutation(uploadMedia, {
    onSuccess: () => {
      queryClient.invalidateQueries("Medias");
    },
  });
};

export const useDeleteMedia = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteMedia, {
    onSuccess: () => {
      queryClient.invalidateQueries("Medias");
    },
  });
};
