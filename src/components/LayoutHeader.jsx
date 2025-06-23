import { useNavigate } from 'react-router-dom'
import { getUserFromToken, removeToken } from '../utils/storage'

const LayoutHeader = () => {
  const navigate = useNavigate()
  const user = getUserFromToken()

  const handleLogout = () => {
    removeToken()
    navigate('/')
  }

  return (
    <div className="bg-gray-900 text-white p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
      <h1 className="text-xl font-bold mb-2 sm:mb-0">APLICACIÓN POLICIAL</h1>
      <div className="flex flex-wrap gap-2 items-center">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded"
          onClick={() => navigate('/add')}
        >
          Agregar objeto
        </button>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded"
          onClick={() => navigate('/search')}
        >
          Buscar / Eliminar
        </button>
        {user?.username === 'GUSTAVOPERALTA' && (
          <button
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-1 px-2 rounded"
            onClick={() => navigate('/admin')}
          >
            Administrar usuarios
          </button>
        )}
        <span className="ml-2 font-bold text-white">
          {user?.username}
        </span>
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  )
}

export default LayoutHeader
