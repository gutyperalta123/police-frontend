import React from 'react'

const ObjectCard = ({ objeto, onDelete }) => {
  return (
    <div className="border rounded p-4 bg-white shadow">
      <p><strong>ID:</strong> {objeto._id}</p>
      {Object.entries(objeto).map(([key, value]) =>
        key !== '_id' && key !== '__v' && key !== 'fecha' ? (
          <p key={key}><strong>{key.toUpperCase()}:</strong> {value}</p>
        ) : null
      )}
      {objeto.fecha && <p><strong>FECHA:</strong> {new Date(objeto.fecha).toLocaleString()}</p>}
      {onDelete && <button onClick={onDelete} className="btn-red mt-2">Eliminar</button>}
    </div>
  )
}

export default ObjectCard
