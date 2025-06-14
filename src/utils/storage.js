export const setSession = (token, username) => {
  localStorage.setItem('token', token)
  localStorage.setItem('username', username)
}

export const getToken = () => {
  return localStorage.getItem('token')
}

export const getUsername = () => {
  return localStorage.getItem('username')
}

export const clearSession = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('username')
}
