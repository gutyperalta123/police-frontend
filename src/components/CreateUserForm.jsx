import { useState } from 'react'
import { getToken } from '../utils/storage'

const CreateUserForm = () => {
  const [form, setForm] = useState({ username: '', password: '', legajo: '' })
  const [mensaje, setMensaje] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value.toUpperCase() })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMensaje('')
    try {
      const response = await fetch('https://police-backend-dwup.onrender.com/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getToken()}`
        },
        body: JSON.stringify(form)
      })

      if (!response.ok) throw new Error('Error al crear usuario')
      setMensaje('Usuario creado correctamente')
      setForm({ username: '', password: '', legajo: '' })
    } catch (err) {
      setMensaje(err.message)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-2">Crear nuevo usuario</h2>
      <div className="grid grid-cols-3 gap-4">
        <input type="text" name="username" placeholder="Usuario" value={form.username} onChange={handleChange} className="p-2 border rounded" required />
        <input type="text" name="legajo" placeholder="Legajo" value={form.legajo} onChange={handleChange} className="p-2 border rounded" required />
        <input type="password" name="password" placeholder="Contraseña" value={form.password} onChange={handleChange} className="p-2 border rounded" required />
      </div>
      <button type="submit" className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
        Crear usuario
      </button>
      {mensaje && <p className="mt-2">{mensaje}</p>}
    </form>
  )
}

export default CreateUserForm
