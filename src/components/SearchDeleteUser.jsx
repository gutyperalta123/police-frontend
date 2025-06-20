import React, { useState } from 'react'
import { getToken } from '../utils/storage'

const SearchDeleteUser = ({ update }) => {
  const [legajo, setLegajo] = useState('')
  const [mensaje, setMensaje] = useState('')

  const handleDelete = async () => {
    if (!window.confirm('¿Estás seguro de eliminar este usuario?')) return
    try {
      const res = await fetch(`https://police-backend-dwup.onrender.com/api/users/${legajo}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })
      if (res.ok) {
        setMensaje('Usuario eliminado correctamente.')
        setLegajo('')
      } else {
        setMensaje('No se encontró el usuario o no se pudo eliminar.')
      }
    } catch (err) {
      setMensaje('Error de conexión con el servidor.')
    }
  }

  return (
    <div className="space-y-2">
      <input
        type="text"
        placeholder="Legajo del usuario"
        value={legajo}
        onChange={e => setLegajo(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <button onClick={handleDelete} className="bg-red-600 text-white py-2 px-4 rounded">
        Eliminar Usuario
      </button>
      {mensaje && <p className="mt-2 text-sm">{mensaje}</p>}
    </div>
  )
}

export default SearchDeleteUser
