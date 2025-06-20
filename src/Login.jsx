import React, { useState } from 'react'
import { saveToken, saveUser } from './utils/storage.js'
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
      if (res.ok) {
        saveToken(data.token)
        saveUser(data.username)
        onLogin()
      } else {
        setError(data.msg || 'Error al iniciar sesión')
      }
    } catch {
      setError('Error de conexión')
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Iniciar Sesión</h2>
        <input className="input mb-2" placeholder="Usuario" value={username} onChange={e => setUsername(e.target.value.toUpperCase())} />
        <input type="password" className="input mb-4" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit" className="btn btn-blue w-full">Ingresar</button>
        {error && <p className="text-red-600 mt-2 text-center">{error}</p>}
      </form>
    </div>
  )
}

export default Login
