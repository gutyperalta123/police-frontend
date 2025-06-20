import React, { useState } from 'react'

import { getToken, API_URL } from '../utils/storage'

const CreateUserForm = () => {
  const [username, setUsername] = useState('')
  const [legajo, setLegajo] = useState('')
  const [password, setPassword] = useState('')
  const [mensaje, setMensaje] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const res = await fetch(`${API_URL}/api/users/create`, {

        method: 'POST',
        headers: {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${getToken()}`
},
        body: JSON.stringify({
          username: username.toUpperCase(),
          legajo,
          password
        })
      })

      if (res.ok) {
        setMensaje('Usuario creado correctamente')
        setUsername('')
        setLegajo('')
        setPassword('')
      } else {
        setMensaje('Error al crear usuario')
      }
    } catch (err) {
      setMensaje('Error de conexión')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={e => setUsername(e.target.value)}
        className="border p-2 rounded w-full"
        required
      />
      <input
        type="text"
        placeholder="Legajo"
        value={legajo}
        onChange={e => setLegajo(e.target.value)}
        className="border p-2 rounded w-full"
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="border p-2 rounded w-full"
        required
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Crear usuario
      </button>
      {mensaje && <p className="text-sm text-red-600">{mensaje}</p>}
    </form>
  )
}

export default CreateUserForm
