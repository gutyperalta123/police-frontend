// src/components/ObjectCard.jsx
import React from 'react'
import { getUser } from '../utils/storage'

const ObjectCard = ({ objeto, onDelete }) => {
  const isAdmin = getUser() === 'GUSTAVOPERALTA'

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <p><strong>COMISARIA:</strong> {objeto.comisaria}</p>
      <p><strong>TIPO:</strong> {objeto.tipo}</p>
      <p><strong>NUMERO SERIE:</strong> {objeto.numero_serie}</p>
      <p><strong>IMEI:</strong> {objeto.imei}</p>
      <p><strong>MARCA:</strong> {objeto.marca}</p>
      <p><strong>MODELO:</strong> {objeto.modelo}</p>
      <p><strong>COLOR:</strong> {objeto.color}</p>
      <p><strong>NUMERO MOTOR:</strong> {objeto.numero_motor}</p>
      <p><strong>NUMERO CUADRO:</strong> {objeto.numero_cuadro}</p>
      <p><strong>NUMERO DOMINIO:</strong> {objeto.numero_dominio}</p>
      <p><strong>CARACTERISTICAS:</strong> {objeto.caracteristicas}</p>
      <p><strong>DENUNCIANTE:</strong> {objeto.denunciante}</p>
      <p><strong>DNI DENUNCIANTE:</strong> {objeto.dni_denunciante}</p>
      <p><strong>FISCAL:</strong> {objeto.fiscal}</p>
      <p><strong>DESCRIPCION:</strong> {objeto.descripcion}</p>

      {isAdmin && (
        <button
          onClick={() => onDelete(objeto._id)}
          className="bg-red-600 text-white px-3 py-1 mt-2 rounded hover:bg-red-700"
        >
          Eliminar
        </button>
      )}
    </div>
  )
}

export default ObjectCard
