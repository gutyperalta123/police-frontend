import { useState } from 'react'
import { getToken } from '../utils/storage'

const AdminPanelView = () => {
  const [legajo, setLegajo] = useState('')
  const [usuarioEncontrado, setUsuarioEncontrado] = useState(null)
  const [mensaje, setMensaje] = useState('')

  const buscarUsuario = async () => {
    setMensaje('')
    setUsuarioEncontrado(null)
    if (!legajo) {
      setMensaje('⚠️ Ingrese un legajo.')
      return
    }

    try {
      const res = await fetch(`http://localhost:5000/api/users/buscar-legajo?legajo=${legajo}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })
      const data = await res.json()
      if (res.ok) {
        setUsuarioEncontrado(data)
      } else {
        setMensaje(`❌ ${data.msg || 'No se encontró el usuario.'}`)
      }
    } catch {
      setMensaje('❌ Error de conexión con el servidor.')
    }
  }

  const eliminarUsuario = async () => {
    const confirmacion = confirm(`¿Estás seguro de eliminar al usuario ${usuarioEncontrado.username}?`)
    if (!confirmacion) return

    try {
      const res = await fetch(`http://localhost:5000/api/users/${legajo}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })
      const data = await res.json()
      if (res.ok) {
        setMensaje('✅ Usuario eliminado correctamente.')
        setUsuarioEncontrado(null)
        setLegajo('')
      } else {
        setMensaje(`❌ ${data.msg || 'Error al eliminar.'}`)
      }
    } catch {
      setMensaje('❌ No se pudo conectar al servidor.')
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white max-w-md mx-auto p-6 rounded shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Panel de Administración</h2>

        {mensaje && <p className="text-center text-sm text-red-600 mb-4">{mensaje}</p>}

        <input
          type="text"
          value={legajo}
          onChange={(e) => setLegajo(e.target.value.toUpperCase())}
          placeholder="Ingrese legajo del usuario"
          className="w-full mb-4 p-2 border rounded"
        />

        <button
          onClick={buscarUsuario}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mb-4"
        >
          Buscar Usuario
        </button>

        {usuarioEncontrado && (
          <div className="bg-gray-50 p-4 rounded border text-center">
            <p className="mb-2">👤 <strong>Usuario:</strong> {usuarioEncontrado.username}</p>
            <p className="mb-4">🆔 <strong>Legajo:</strong> {usuarioEncontrado.legajo}</p>
            <button
              onClick={eliminarUsuario}
              className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
            >
              Eliminar Usuario
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminPanelView
