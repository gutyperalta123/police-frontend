import React, { useState } from 'react'

const ObjectCard = ({ obj, onDelete, isAdmin }) => {
  return (
    <div className="bg-white shadow-md p-4 mb-4 rounded">
      <p><strong>ID:</strong> {obj._id}</p>
      <p><strong>COMISARIA:</strong> {obj.COMISARIA}</p>
      <p><strong>TIPO:</strong> {obj.TIPO}</p>
      <p><strong>MARCA:</strong> {obj.MARCA}</p>
      <p><strong>MODELO:</strong> {obj.MODELO}</p>
      <p><strong>IMEI:</strong> {obj.IMEI}</p>
      <p><strong>NUMERO SERIE:</strong> {obj.NUMERO_SERIE}</p>
      <p><strong>NUMERO MOTOR:</strong> {obj.NUMERO_MOTOR}</p>
      <p><strong>NUMERO CUADRO:</strong> {obj.NUMERO_CUADRO}</p>
      <p><strong>NUMERO DOMINIO:</strong> {obj.NUMERO_DOMINIO}</p>
      <p><strong>COLOR:</strong> {obj.COLOR}</p>
      <p><strong>CARACTERISTICAS:</strong> {obj.CARACTERISTICAS}</p>
      <p><strong>DENUNCIANTE:</strong> {obj.DENUNCIANTE}</p>
      <p><strong>DNI DENUNCIANTE:</strong> {obj.DNI_DENUNCIANTE}</p>
      <p><strong>FISCAL:</strong> {obj.FISCAL}</p>
      <p><strong>DESCRIPCION:</strong> {obj.DESCRIPCION}</p>
      <p><strong>FECHA:</strong> {obj.createdAt}</p>
      {isAdmin && (
        <button
          className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          onClick={() => onDelete(obj._id)}
        >
          Eliminar
        </button>
      )}
    </div>
  )
}

export default ObjectCard
