import { useState } from 'react'
import { getToken } from '../utils/storage'

const SearchObjectForm = ({ setResults }) => {
  const [query, setQuery] = useState('')
  const [mensaje, setMensaje] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMensaje('')
    try {
      const response = await fetch(`https://police-backend-dwup.onrender.com/api/objects/search?q=${query}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })
      const data = await response.json()
      setResults(data)
    } catch (err) {
      setMensaje('Error al buscar')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Buscar objeto"
        value={query}
        onChange={(e) => setQuery(e.target.value.toUpperCase())}
        className="p-2 border rounded w-full mb-2"
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Buscar
      </button>
      {mensaje && <p className="mt-2 text-red-500">{mensaje}</p>}
    </form>
  )
}

export default SearchObjectForm
