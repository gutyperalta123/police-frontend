import { getToken, getUserFromToken } from '../utils/storage'

const SearchResults = ({ results, onDelete }) => {
  const user = getUserFromToken()

  const handleDelete = async id => {
    const confirm = window.confirm('¿Estás seguro de eliminar este objeto?')
    if (!confirm) return

    try {
      const res = await fetch(`https://police-backend-dwup.onrender.com/api/objects/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })

      if (!res.ok) {
        const error = await res.json()
        alert(`❌ Error al eliminar: ${error.message}`)
        return
      }

      alert('✅ Objeto eliminado correctamente')
      onDelete(id)
    } catch (err) {
      alert('❌ Error de conexión con el servidor')
    }
  }

  if (results.length === 0) {
    return <p className="text-center mt-4 text-gray-600">No se encontraron objetos.</p>
  }

  return (
    <div className="mt-6 grid gap-4">
      {results.map(obj => (
        <div
          key={obj._id}
          className="bg-white rounded-lg shadow-md p-4 border border-gray-300"
        >
          <p><strong>COMISARIA:</strong> {obj.COMISARIA}</p>
          <p><strong>TIPO:</strong> {obj.TIPO}</p>
          <p><strong>IMEI:</strong> {obj.IMEI}</p>
          <p><strong>DENUNCIANTE:</strong> {obj.DENUNCIANTE}</p>
          <p><strong>DESCRIPCIÓN:</strong> {obj.DESCRIPCION}</p>
          {user?.username === 'GUSTAVOPERALTA' && (
            <button
              onClick={() => handleDelete(obj._id)}
              className="mt-2 bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
            >
              Eliminar
            </button>
          )}
        </div>
      ))}
    </div>
  )
}

export default SearchResults
