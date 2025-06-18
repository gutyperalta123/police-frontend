import React, { useState } from 'react'

const DeleteUserForm = () => {
  const [legajo, setLegajo] = useState('')
  const [mensaje, setMensaje] = useState('')

  const handleDelete = async () => {
    try {
      const res = await fetch(`https://police-backend-dwup.onrender.com/api/users/${legajo}`, {
        method: 'DELETE'
      })

      if (res.ok) {
        setMensaje('Usuario eliminado correctamente')
        setLegajo('')
      } else {
        setMensaje('Error al eliminar usuario')
      }
    } catch (err) {
      setMensaje('Error de conexión')
    }
  }

  return (
    <div className="space-y-2">
      <input
        type="text"
        placeholder="Legajo"
        value={legajo}
        onChange={e => setLegajo(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <button onClick={handleDelete} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
        Eliminar usuario
      </button>
      {mensaje && <p className="text-sm text-red-600">{mensaje}</p>}
    </div>
  )
}

export default DeleteUserForm
