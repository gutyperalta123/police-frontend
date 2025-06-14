import { useState } from 'react'
import { getToken } from '../utils/storage'

const DeleteUserForm = () => {
  const [legajo, setLegajo] = useState('')
  const [mensaje, setMensaje] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMensaje('')
    try {
      const response = await fetch(`https://police-backend-dwup.onrender.com/api/users/${legajo}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })

      if (!response.ok) throw new Error('Error al eliminar usuario')
      setMensaje('Usuario eliminado correctamente')
      setLegajo('')
    } catch (err) {
      setMensaje(err.message)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-2">Eliminar usuario por legajo</h2>
      <input
        type="text"
        placeholder="Legajo"
        value={legajo}
        onChange={(e) => setLegajo(e.target.value.toUpperCase())}
        className="p-2 border rounded w-full"
        required
      />
      <button type="submit" className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
        Eliminar usuario
      </button>
      {mensaje && <p className="mt-2">{mensaje}</p>}
    </form>
  )
}

export default DeleteUserForm
