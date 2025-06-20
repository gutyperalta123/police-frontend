import React, { useState } from 'react'
import { getToken } from '../utils/storage'

const CreateUserForm = ({ onCreate }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [legajo, setLegajo] = useState('')
  const [mensaje, setMensaje] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await fetch('https://police-backend-dwup.onrender.com/api/users/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getToken()}`
        },
        body: JSON.stringify({ username: username.toUpperCase(), password, legajo })
      })

      if (res.ok) {
        setMensaje('Usuario creado correctamente.')
        setUsername('')
        setPassword('')
        setLegajo('')
        if (onCreate) onCreate()
      } else {
        setMensaje('Error al crear el usuario.')
      }
    } catch (err) {
      setMensaje('Error de conexión con el servidor.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={e => setUsername(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="text"
        placeholder="Legajo"
        value={legajo}
        onChange={e => setLegajo(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded">
        Crear Usuario
      </button>
      {mensaje && <p className="mt-2 text-sm">{mensaje}</p>}
    </form>
  )
}

export default CreateUserForm
