import { useState } from 'react'
import { getToken, getUsername } from '../utils/storage'

const CreateUserForm = () => {
  const [form, setForm] = useState({
    legajo: '',
    username: '',
    password: ''
  })
  const [mensaje, setMensaje] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: name === 'password' ? value : value.toUpperCase()
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const admin = getUsername()
    if (admin !== 'GUSTAVOPERALTA') {
      setMensaje('❌ Solo el administrador puede crear usuarios.')
      return
    }

    try {
      const res = await fetch('http://localhost:5000/api/users/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getToken()}`
        },
        body: JSON.stringify(form)
      })

      const data = await res.json()
      if (res.ok) {
        setMensaje('✅ Usuario creado correctamente.')
        setForm({ legajo: '', username: '', password: '' })
      } else {
        setMensaje(`❌ ${data.msg || 'Error al crear el usuario.'}`)
      }
    } catch (err) {
      setMensaje('❌ No se pudo conectar al servidor.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md max-w-md mx-auto my-10">
      <h2 className="text-xl font-bold text-center mb-4">Crear Nuevo Usuario</h2>
      {mensaje && <p className="text-center text-sm text-red-600 mb-4">{mensaje}</p>}

      <input
        type="text"
        name="legajo"
        placeholder="Legajo personal"
        value={form.legajo}
        onChange={handleChange}
        required
        className="w-full mb-3 p-2 border rounded"
      />

      <input
        type="text"
        name="username"
        placeholder="Nombre de usuario"
        value={form.username}
        onChange={handleChange}
        required
        className="w-full mb-3 p-2 border rounded"
      />

      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        value={form.password}
        onChange={handleChange}
        required
        className="w-full mb-3 p-2 border rounded"
      />

      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Crear Usuario
      </button>
    </form>
  )
}

export default CreateUserForm
