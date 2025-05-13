import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export const uploadImages = async (url, formData) => {
  const params = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      "Content-Type": "multipart/form-data",
    },
  };

  var response;
  await axios.post(apiUrl + url, formData, params).then((res) => {
    response = res;
  });

  return response;
};

export const deleteImages = async (url, image) => {
  const params = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      "Content-Type": "application/json",
    },
  };

  const { res } = await axios.delete(apiUrl + url, image, params);
  return res;
};

export const deleteData = async (url) => {
  const params = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      "Content-Type": "application/json",
    },
  };

  const { res } = await axios.delete(apiUrl, +url, params);
  return res;
};

export const deleteMultipleData = async (url, data) => {
  const params = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      "Content-Type": "application/json", // Agar kerak bo‘lsa, o‘zgartiring
    },
  };

  const { res } = await axios.delete(apiUrl + url, data, params);
  return res;
};
