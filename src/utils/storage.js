const TOKEN_KEY = 'token'
const USERNAME_KEY = 'username'

export const API_URL = 'https://police-backend-dwup.onrender.com/api'

export function saveToken(token) {
  localStorage.setItem(TOKEN_KEY, token)
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY)
}

export function saveUser(username) {
  localStorage.setItem(USERNAME_KEY, username)
}

export function getUsername() {
  return localStorage.getItem(USERNAME_KEY)
}

export function clearStorage() {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(USERNAME_KEY)
}
