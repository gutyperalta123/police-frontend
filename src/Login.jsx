import { useState } from 'react'
import { setToken, setUsername } from './utils/storage'

const Login = ({ onLogin }) => {
  const [username, setUser] = useState('')
  const [password, setPass] = useState('')
  const [error, setError] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch('https://police-backend-dwup.onrender.com/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      })

      const data = await res.json()
      if (res.ok) {
        setToken(data.token)
        setUsername(data.username)
        onLogin(data.username)
      } else {
        setError(data.msg || 'Credenciales inválidas')
      }
    } catch {
      setError('Error de conexión con el servidor')
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Ingreso a la Aplicación</h2>

        {error && <p className="text-red-600 text-center mb-4">{error}</p>}

        <input type="text" placeholder="Usuario" className="w-full mb-4 p-2 border rounded"
          value={username} onChange={e => setUser(e.target.value.toUpperCase())} required />

        <input type="password" placeholder="Contraseña" className="w-full mb-4 p-2 border rounded"
          value={password} onChange={e => setPass(e.target.value)} required />

        <button className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded">
          Ingresar
        </button>
      </form>
    </div>
  )
}

export default Login
