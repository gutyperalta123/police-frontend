// src/utils/storage.js

export const API_URL = 'https://police-backend-dwup.onrender.com'

export const saveToken = token => {
  localStorage.setItem('token', token)
}

export const getToken = () => {
  return localStorage.getItem('token')
}

export const clearToken = () => {
  localStorage.removeItem('token')
}

export const saveUser = username => {
  localStorage.setItem('username', username)
}

export const getUser = () => {
  return localStorage.getItem('username')
}
