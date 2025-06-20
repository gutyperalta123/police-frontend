// src/components/ObjectCard.jsx
import React from 'react'
import { getUsername } from '../utils/storage'

const ObjectCard = ({ objeto, onDelete }) => {
  const esAdmin = getUsername() === 'GUSTAVOPERALTA'

  return (
    <div className="bg-white rounded shadow p-4 mb-4">
      <h2 className="text-lg font-bold mb-2">{objeto.TIPO}</h2>
      <ul className="text-sm">
        <li><strong>COMISARIA:</strong> {objeto.COMISARIA}</li>
        <li><strong>NUMERO SERIE:</strong> {objeto.NUMERO_SERIE}</li>
        <li><strong>IMEI:</strong> {objeto.IMEI}</li>
        <li><strong>MARCA:</strong> {objeto.MARCA}</li>
        <li><strong>MODELO:</strong> {objeto.MODELO}</li>
        <li><strong>COLOR:</strong> {objeto.COLOR}</li>
        <li><strong>NUMERO MOTOR:</strong> {objeto.NUMERO_MOTOR}</li>
        <li><strong>NUMERO CUADRO:</strong> {objeto.NUMERO_CUADRO}</li>
        <li><strong>NUMERO DOMINIO:</strong> {objeto.NUMERO_DOMINIO}</li>
        <li><strong>CARACTERISTICAS:</strong> {objeto.CARACTERISTICAS}</li>
        <li><strong>DENUNCIANTE:</strong> {objeto.DENUNCIANTE}</li>
        <li><strong>DNI DENUNCIANTE:</strong> {objeto.DNI_DENUNCIANTE}</li>
        <li><strong>FISCAL:</strong> {objeto.FISCAL}</li>
        <li><strong>DESCRIPCION:</strong> {objeto.DESCRIPCION}</li>
      </ul>
      {esAdmin && (
        <button
          className="mt-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          onClick={() => onDelete(objeto._id)}
        >
          Eliminar
        </button>
      )}
    </div>
  )
}

export default ObjectCard
