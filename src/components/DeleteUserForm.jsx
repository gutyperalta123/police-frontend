// frontend/src/components/DeleteUserForm.jsx
import { useState } from 'react'
import { API_URL, getToken } from '../utils/storage'

const DeleteUserForm = () => {
  const [legajo, setLegajo] = useState('')
  const [mensaje, setMensaje] = useState('')

  const handleDelete = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(`${API_URL}/api/users/${legajo}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })

      if (!res.ok) {
        throw new Error('Error al eliminar')
      }

      setMensaje('Usuario eliminado con éxito')
      setLegajo('')
    } catch (err) {
      setMensaje('No se pudo eliminar el usuario')
    }
  }

  return (
    <form onSubmit={handleDelete} className="bg-white p-4 rounded shadow-md mt-4">
      <h2 className="text-lg font-bold mb-2">Eliminar Usuario por Legajo</h2>
      <input
        type="text"
        placeholder="Número de legajo"
        value={legajo}
        onChange={(e) => setLegajo(e.target.value.toUpperCase())}
        className="w-full mb-2 p-2 border rounded"
        required
      />
      <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
        Eliminar
      </button>
      {mensaje && <p className="mt-2 text-sm">{mensaje}</p>}
    </form>
  )
}

export default DeleteUserForm
