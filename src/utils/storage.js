// frontend/src/utils/storage.js
export const API_URL = 'https://police-backend-dwup.onrender.com';

export const getToken = () => {
  return localStorage.getItem('token');
};

export const setToken = (token) => {
  localStorage.setItem('token', token);
};

export const clearToken = () => {
  localStorage.removeItem('token');
};
