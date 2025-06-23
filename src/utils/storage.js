const TOKEN_KEY = 'token'

// URL base del backend
export const API_URL = 'https://police-backend-dwup.onrender.com/api'
export const saveToken = (token) => {
  localStorage.setItem('token', token)
}

export const getToken = () => {
  return localStorage.getItem('token')
}

export const removeToken = () => {
  localStorage.removeItem('token')
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
