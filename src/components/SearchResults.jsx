import React from 'react'
import { getUsername, getToken } from '../utils/storage'

const SearchResults = ({ results, onDelete }) => {
  const esAdmin = getUsername() === 'GUSTAVOPERALTA'

  if (!results || results.length === 0) {
    return (
      <div className="text-center text-gray-600 text-lg mt-8 p-4 bg-white rounded-xl shadow-lg max-w-md mx-auto">
        No se encontraron objetos.
      </div>
    )
  }

  const handleDelete = async (id) => {
    const confirmar = window.confirm('¿Estás seguro de eliminar este objeto?')
    if (!confirmar) return

    try {
      const res = await fetch(`http://localhost:5000/api/objects/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })

      const data = await res.json()
      if (res.ok) {
        alert('✅ Objeto eliminado correctamente.')
        onDelete(id)
      } else {
        alert(`❌ ${data.msg}`)
      }
    } catch {
      alert('❌ Error de conexión al eliminar')
    }
  }

  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {results.map((objeto) => (
        <div
          key={objeto._id}
          className="bg-white rounded-xl shadow-lg p-6 border border-gray-300 hover:shadow-xl transition-shadow"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {objeto.tipo} - {objeto.marca} {objeto.modelo}
          </h3>
          <p><strong>COMISARÍA:</strong> {objeto.comisaria}</p>
          <p><strong>TIPO:</strong> {objeto.tipo}</p>
          <p><strong>MARCA:</strong> {objeto.marca}</p>
          <p><strong>MODELO:</strong> {objeto.modelo}</p>
          <p><strong>IMEI:</strong> {objeto.imei}</p>
          <p><strong>N° SERIE:</strong> {objeto.numero_serie}</p>
          <p><strong>N° MOTOR:</strong> {objeto.numero_motor}</p>
          <p><strong>N° CUADRO:</strong> {objeto.numero_cuadro}</p>
          <p><strong>DOMINIO:</strong> {objeto.numero_dominio}</p>
          <p><strong>COLOR:</strong> {objeto.color}</p>
          <p><strong>CARACTERÍSTICAS:</strong> {objeto.caracteristicas}</p>
          <p><strong>DENUNCIANTE:</strong> {objeto.denunciante}</p>
          <p><strong>DNI DEL DENUNCIANTE:</strong> {objeto.dni_denunciante}</p>
          <p><strong>FISCAL:</strong> {objeto.fiscal}</p>
          <p><strong>DESCRIPCIÓN:</strong> {objeto.descripcion}</p>

          {esAdmin && (
            <button
              onClick={() => handleDelete(objeto._id)}
              className="mt-4 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition-colors font-semibold"
            >
              Eliminar Objeto
            </button>
          )}
        </div>
      ))}
    </div>
  )
}

export default SearchResults
