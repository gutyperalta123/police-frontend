import { useEffect, useState } from 'react'
import { getToken } from '../utils/storage'

const DeleteUserView = () => {
  const [usuarios, setUsuarios] = useState([])
  const [query, setQuery] = useState('')
  const [mensaje, setMensaje] = useState('')

  const buscarUsuarios = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/users/all?q=${query}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })
      const data = await res.json()
      if (res.ok) {
        setUsuarios(data)
        setMensaje('')
      } else {
        setMensaje(data.msg || 'Error al buscar')
      }
    } catch {
      setMensaje('Error de conexión con el servidor')
    }
  }

  const eliminar = async (id) => {
    if (!confirm('¿Seguro que querés eliminar este usuario?')) return
    try {
      const res = await fetch(`http://localhost:5000/api/users/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })
      const data = await res.json()
      if (res.ok) {
        setMensaje('✅ Usuario eliminado')
        buscarUsuarios()
      } else {
        setMensaje(data.msg || 'Error al eliminar')
      }
    } catch {
      setMensaje('Error de conexión al eliminar')
    }
  }

  useEffect(() => {
    if (query.length > 0) {
      buscarUsuarios()
    } else {
      setUsuarios([])
    }
  }, [query])

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-xl font-bold mb-4 text-center">Buscar y Eliminar Usuarios</h2>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value.toUpperCase())}
        placeholder="Buscar por legajo o nombre de usuario"
        className="w-full p-3 border rounded mb-4"
      />

      {mensaje && <p className="text-red-600 text-center mb-4">{mensaje}</p>}

      <div className="space-y-3">
        {usuarios.map((u) => (
          <div key={u._id} className="bg-white p-4 shadow rounded flex justify-between items-center">
            <div>
              <p className="font-semibold">{u.username}</p>
              <p className="text-sm text-gray-500">Legajo: {u.legajo}</p>
            </div>
            <button
              onClick={() => eliminar(u._id)}
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DeleteUserView
