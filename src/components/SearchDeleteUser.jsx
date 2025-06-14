import { useState } from 'react'
import { getToken } from '../utils/storage'

const SearchDeleteUser = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [mensaje, setMensaje] = useState('')

  const handleSearch = async () => {
    setMensaje('')
    try {
      const response = await fetch(`https://police-backend-dwup.onrender.com/api/users/buscar?query=${query}`, {
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
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-2">Buscar usuarios</h2>
      <div className="flex space-x-2 mb-2">
        <input
          type="text"
          placeholder="Buscar por nombre o legajo"
          value={query}
          onChange={(e) => setQuery(e.target.value.toUpperCase())}
          className="p-2 border rounded w-full"
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded">
          Buscar
        </button>
      </div>
      {mensaje && <p>{mensaje}</p>}
      <ul className="space-y-2">
        {results.map((user) => (
          <li key={user._id} className="border p-2 rounded">
            {user.username} - {user.legajo}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchDeleteUser
