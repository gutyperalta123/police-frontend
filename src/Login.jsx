// src/Login.jsx
import React, { useState } from 'react'
import { saveToken, saveUser } from './utils/storage'
import './styles.css'

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

      if (!res.ok) {
        setError(data.msg || 'Error al iniciar sesión')
        return
      }

      saveToken(data.token)
      saveUser(data.username)
      onLogin(data.username)
    } catch (err) {
      setError('Error al conectar con el servidor')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Ingresar
        </button>
      </form>
    </div>
  )
}

export default Login
