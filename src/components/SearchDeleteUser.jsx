import { useState } from 'react'
import { getToken, getUsername } from '../utils/storage'

const SearchDeleteUser = () => {
  const [legajo, setLegajo] = useState('')
  const [usuario, setUsuario] = useState(null)
  const [mensaje, setMensaje] = useState('')

  const buscarUsuario = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/users/buscar-legajo?legajo=${legajo}`, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
      const data = await res.json()
      if (res.ok) {
        setUsuario(data)
        setMensaje('')
      } else {
        setUsuario(null)
        setMensaje(`❌ ${data.msg || 'Usuario no encontrado'}`)
      }
    } catch {
      setMensaje('❌ Error al conectar con el servidor')
    }
  }

  const eliminarUsuario = async () => {
    const confirm = window.confirm(`¿Estás seguro que deseas eliminar al usuario ${usuario.username}?`)
    if (!confirm) return

    try {
      const res = await fetch(`http://localhost:5000/api/users/${legajo}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${getToken()}` }
      })
      const data = await res.json()
      if (res.ok) {
        setMensaje('✅ Usuario eliminado exitosamente')
        setUsuario(null)
        setLegajo('')
      } else {
        setMensaje(`❌ ${data.msg || 'No se pudo eliminar el usuario'}`)
      }
    } catch {
      setMensaje('❌ Error al conectar con el servidor')
    }
  }

  return (
    <div className="bg-white p-6 max-w-md mx-auto my-10 rounded shadow-md">
      <h2 className="text-xl font-bold text-center mb-4">Buscar y Eliminar Usuario</h2>

      <input
        type="text"
        placeholder="Legajo del usuario"
        value={legajo}
        onChange={(e) => setLegajo(e.target.value.toUpperCase())}
        className="w-full mb-3 p-2 border rounded"
      />

      <button
        onClick={buscarUsuario}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mb-4"
      >
        Buscar Usuario
      </button>

      {mensaje && <p className="text-center text-sm text-red-600 mb-3">{mensaje}</p>}

      {usuario && (
        <div className="bg-gray-100 p-3 rounded shadow">
          <p><strong>Usuario:</strong> {usuario.username}</p>
          <p><strong>Legajo:</strong> {usuario.legajo}</p>
          <button
            onClick={eliminarUsuario}
            className="mt-3 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
          >
            Eliminar Usuario
          </button>
        </div>
      )}
    </div>
  )
}

export default SearchDeleteUser
