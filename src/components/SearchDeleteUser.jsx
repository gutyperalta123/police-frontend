import React, { useState } from 'react'

import { API_URL } from '../utils/storage'

const SearchDeleteUser = () => {
  const [legajo, setLegajo] = useState('')
  const [resultado, setResultado] = useState(null)
  const [error, setError] = useState('')

  const handleSearch = async () => {
    try {
      const res = await fetch(`${API_URL}/api/users/${legajo}`)

      if (res.ok) {
        const data = await res.json()
        setResultado(data)
        setError('')
      } else {
        setResultado(null)
        setError('Usuario no encontrado')
      }
    } catch (err) {
      setError('Error al buscar')
    }
  }

  return (
    <div className="space-y-2">
      <input
        type="text"
        placeholder="Buscar usuario por legajo"
        value={legajo}
        onChange={e => setLegajo(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Buscar
      </button>
      {error && <p className="text-sm text-red-600">{error}</p>}
      {resultado && (
        <div className="mt-2 p-2 border rounded bg-gray-50">
          <p><strong>Usuario:</strong> {resultado.username}</p>
          <p><strong>Legajo:</strong> {resultado.legajo}</p>
        </div>
      )}
    </div>
  )
}

export default SearchDeleteUser
