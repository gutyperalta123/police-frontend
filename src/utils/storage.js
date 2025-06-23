const TOKEN_KEY = 'token'

export const API_URL = 'https://police-backend-dwup.onrender.com/api'

export const saveToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token)
}

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY)
}

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem('user')
}

export const saveUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user))
}

export const getUserFromToken = () => {
  const token = getToken()
  if (!token) return null

  try {
    const payload = JSON.parse(atob(token.split('.')[1]))
    return payload
  } catch (error) {
    console.error('Error al decodificar token:', error)
    return null
  }
}

export const getUser = () => {
  const user = localStorage.getItem('user')
  return user ? JSON.parse(user) : null
}

export const clearStorage = () => {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem('user')
}
