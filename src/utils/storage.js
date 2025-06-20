const TOKEN_KEY = 'token'
const USER_KEY = 'user'

export const saveToken = token => {
  localStorage.setItem(TOKEN_KEY, token)
}

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY)
}

export const saveUser = username => {
  localStorage.setItem(USER_KEY, username)
}

export const getUser = () => {
  return localStorage.getItem(USER_KEY)
}

export const clearStorage = () => {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(USER_KEY)
}

export const API_URL = 'https://police-backend-dwup.onrender.com'
