import { useState } from 'react'
import { setSession } from './utils/storage'

function Login() {
  const [form, setForm] = useState({ username: '', password: '' })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    try {
      const response = await fetch('https://police-backend-dwup.onrender.com/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })

      if (!response.ok) {
        throw new Error('Credenciales inválidas')
      }

      const data = await response.json()
      setSession(data.token, data.username)
      window.location.reload()
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Iniciar sesión</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <input
          type="text"
          name="username"
          placeholder="Usuario"
          value={form.username}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded"
          required
        />

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
          Entrar
        </button>
      </form>
    </div>
  )
}

export default Login
