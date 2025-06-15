// frontend/src/components/CreateUserForm.jsx
import { useState } from 'react'
import { API_URL, getToken } from '../utils/storage'

const CreateUserForm = () => {
  const [form, setForm] = useState({ username: '', password: '', legajo: '' })
  const [mensaje, setMensaje] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value.toUpperCase() }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(`${API_URL}/api/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getToken()}`
        },
        body: JSON.stringify(form)
      })

      if (!res.ok) {
        throw new Error('No se pudo crear el usuario')
      }

      setMensaje('Usuario creado con éxito')
      setForm({ username: '', password: '', legajo: '' })
    } catch (err) {
      setMensaje('Error al crear usuario')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
      <h2 className="text-lg font-bold mb-2">Crear Usuario</h2>
      <input
        type="text"
        name="username"
        placeholder="Usuario"
        value={form.username}
        onChange={handleChange}
        className="w-full mb-2 p-2 border rounded"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        value={form.password}
        onChange={(e) => setForm(prev => ({ ...prev, password: e.target.value }))}
        className="w-full mb-2 p-2 border rounded"
        required
      />
      <input
        type="text"
        name="legajo"
        placeholder="Legajo"
        value={form.legajo}
        onChange={handleChange}
        className="w-full mb-2 p-2 border rounded"
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Crear
      </button>
      {mensaje && <p className="mt-2 text-sm">{mensaje}</p>}
    </form>
  )
}

export default CreateUserForm
