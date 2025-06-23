const TOKEN_KEY = 'token'

// URL base del backend
export const API_URL = 'https://police-backend-dwup.onrender.com/api'

// Guardar token JWT
export function saveToken(token) {
  localStorage.setItem(TOKEN_KEY, token)
}

// Obtener token JWT
export function getToken() {
  return localStorage.getItem(TOKEN_KEY)
}

// Eliminar token JWT
export function removeToken() {
  localStorage.removeItem(TOKEN_KEY)
}

// Limpiar completamente el almacenamiento local
export function clearStorage() {
  localStorage.removeItem(TOKEN_KEY)
}

// Obtener el usuario decodificado desde el token JWT
export function getUserFromToken() {
  const token = getToken()
  if (!token) return null

  try {
    const payload = JSON.parse(atob(token.split('.')[1]))
    return payload // Contiene username, role, etc.
  } catch (error) {
    console.error('Error al decodificar token:', error)
    return null
  }
}

// Alias útil para acceder al usuario completo
export const getUser = () => getUserFromToken()
