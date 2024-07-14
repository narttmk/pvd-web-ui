import axios from "axios";

export const fetchMedias = async () => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/admin/medias`
  );
  return response.data.data;
};

export const uploadMedia = async ({ files }: { files: FileList }) => {
  const formData = new FormData();
  for (let i = 0; i < files.length; i++) {
    formData.append("files", files[i]);
  }
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/admin/medias/upload`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};

export const deleteMedia = async (id: string) => {
  const response = await axios.delete(
    `${import.meta.env.VITE_API_URL}/admin/medias/${id}`
  );
  return response.data;
};
