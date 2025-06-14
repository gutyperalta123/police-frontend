import { useState } from 'react'
import { getToken, getUsername } from '../utils/storage'

const DeleteUserForm = () => {
  const [legajo, setLegajo] = useState('')
  const [mensaje, setMensaje] = useState('')

  const handleDelete = async (e) => {
    e.preventDefault()

    if (getUsername() !== 'GUSTAVOPERALTA') {
      setMensaje('❌ Solo el administrador puede eliminar usuarios.')
      return
    }

    try {
      const res = await fetch(`http://localhost:5000/api/users/delete?legajo=${legajo}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })

      const data = await res.json()
      if (res.ok) {
        setMensaje('✅ Usuario eliminado correctamente.')
      } else {
        setMensaje(`❌ ${data.msg || 'Error al eliminar usuario.'}`)
      }
    } catch {
      setMensaje('❌ Error de conexión con el servidor.')
    }
  }

  return (
    <form onSubmit={handleDelete} className="bg-white p-6 rounded shadow-md max-w-md mx-auto my-10">
      <h2 className="text-xl font-bold text-center mb-4">Eliminar Usuario por Legajo</h2>

      {mensaje && <p className="text-center text-sm text-red-600 mb-4">{mensaje}</p>}

      <input
        type="text"
        placeholder="Número de legajo"
        value={legajo}
        onChange={(e) => setLegajo(e.target.value.toUpperCase())}
        required
        className="w-full mb-3 p-2 border rounded"
      />

      <button type="submit" className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700">
        Eliminar Usuario
      </button>
    </form>
  )
}

export default DeleteUserForm
