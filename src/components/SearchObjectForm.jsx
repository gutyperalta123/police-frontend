// frontend/src/components/SearchObjectForm.jsx
import { useState } from 'react'
import { API_URL, getToken } from '../utils/storage'

const SearchObjectForm = ({ onResults }) => {
  const [search, setSearch] = useState('')
  const [mensaje, setMensaje] = useState('')

  const handleSearch = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch(`${API_URL}/api/objects/search?query=${search.toUpperCase()}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })

      if (!res.ok) {
        throw new Error('Error al buscar')
      }

      const data = await res.json()
      onResults(data)
      setMensaje('')
    } catch (err) {
      setMensaje('No se encontraron resultados o hubo un error')
      onResults([])
    }
  }

  return (
    <form onSubmit={handleSearch} className="mb-4">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar por cualquier campo..."
        className="p-2 border rounded w-full"
        required
      />
      <button type="submit" className="mt-2 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        Buscar
      </button>
      {mensaje && <p className="mt-2 text-sm text-red-500">{mensaje}</p>}
    </form>
  )
}

export default SearchObjectForm
