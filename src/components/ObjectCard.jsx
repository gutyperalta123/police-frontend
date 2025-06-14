const ObjectCard = ({ object, onDelete }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-4 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{object.tipo} - {object.marca} {object.modelo}</h3>
      <p className="text-gray-700 text-sm mb-1"><strong>Comisaría:</strong> {object.comisaria}</p>
      <p className="text-gray-700 text-sm mb-1"><strong>Serie:</strong> {object.numero_serie}</p>
      {object.imei && <p className="text-gray-700 text-sm mb-1"><strong>IMEI:</strong> {object.imei}</p>}
      {object.numero_motor && <p className="text-gray-700 text-sm mb-1"><strong>N° Motor:</strong> {object.numero_motor}</p>}
      {object.numero_cuadro && <p className="text-gray-700 text-sm mb-1"><strong>N° Cuadro:</strong> {object.numero_cuadro}</p>}
      {object.numero_dominio && <p className="text-gray-700 text-sm mb-1"><strong>Dominio:</strong> {object.numero_dominio}</p>}
      <p className="text-gray-700 text-sm mb-1"><strong>Denunciante:</strong> {object.denunciante} (DNI: {object.dni_denunciante})</p>
      <p className="text-gray-700 text-sm mb-1"><strong>Fiscal:</strong> {object.fiscal}</p>
      <p className="text-gray-700 text-sm mb-1"><strong>Características:</strong> {object.caracteristicas}</p>
      <p className="text-gray-700 text-sm mb-1"><strong>Descripción:</strong> {object.descripcion}</p>
      <button
        onClick={() => onDelete(object._id)}
        className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors text-base font-medium shadow-md"
      >
        Eliminar
      </button>
    </div>
  )
}

export default ObjectCard
