import { useEffect, useState } from 'react'
import { getToken, getUserFromToken } from '../utils/storage'

const AdminPanelView = () => {
  const [users, setUsers] = useState([])
  const user = getUserFromToken()

  const fetchUsers = async () => {
    try {
      const res = await fetch('https://police-backend-dwup.onrender.com/api/users', {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })
      const data = await res.json()
      setUsers(data)
    } catch (err) {
      alert('❌ Error al obtener la lista de usuarios')
    }
  }

  const deleteUser = async (legajo) => {
    const confirm = window.confirm(`¿Seguro que deseas eliminar al usuario con legajo ${legajo}?`)
    if (!confirm) return

    try {
      const res = await fetch(`https://police-backend-dwup.onrender.com/api/users/${legajo}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })

      if (!res.ok) {
        const error = await res.json()
        alert(`❌ Error al eliminar usuario: ${error.message}`)
        return
      }

      alert('✅ Usuario eliminado correctamente')
      setUsers(prev => prev.filter(u => u.legajo !== legajo))
    } catch (err) {
      alert('❌ Error de conexión al eliminar usuario')
    }
  }

  useEffect(() => {
    if (user?.username === 'GUSTAVOPERALTA') {
      fetchUsers()
    }
  }, [])

  if (user?.username !== 'GUSTAVOPERALTA') {
    return <p className="text-center mt-4 text-red-600">No tienes permisos para ver esta sección.</p>
  }

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md mt-4">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Administrar Usuarios</h2>

      {users.length === 0 ? (
        <p className="text-center text-gray-600">No hay usuarios registrados.</p>
      ) : (
        <table className="w-full border border-gray-300 mt-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Usuario</th>
              <th className="p-2">Legajo</th>
              <th className="p-2">Rol</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u.legajo} className="border-t border-gray-300 text-center">
                <td className="p-2">{u.username}</td>
                <td className="p-2">{u.legajo}</td>
                <td className="p-2">{u.role}</td>
                <td className="p-2">
                  {u.username !== 'GUSTAVOPERALTA' && (
                    <button
                      onClick={() => deleteUser(u.legajo)}
                      className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                    >
                      Eliminar
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default AdminPanelView
