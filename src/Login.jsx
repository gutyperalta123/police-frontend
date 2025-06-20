import React, { useState } from 'react'
import { saveToken, saveUsername } from './utils/storage.js'

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const res = await fetch('https://police-backend-dwup.onrender.com/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      })

      const data = await res.json()

      if (res.ok) {
        saveToken(data.token)
        saveUsername(data.username)
        onLogin(data.token)
      } else {
        setError(data.msg || 'Error al iniciar sesión')
      }
    } catch (err) {
      setError('Error de conexión')
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar sesión</h2>

        {error && <p className="text-red-600 text-sm mb-4 text-center">{error}</p>}

        <input
          type="text"
          placeholder="USUARIO"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded"
          required
        />
        <input
          type="password"
          placeholder="CONTRASEÑA"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded"
          required
        />
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition duration-300">
          Entrar
        </button>
      </form>
    </div>
  )
}

export default Login
