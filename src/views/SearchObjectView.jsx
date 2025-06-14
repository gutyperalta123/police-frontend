import { useState } from 'react'
import SearchObjectForm from '../components/SearchObjectForm'
import SearchResults from '../components/SearchResults'
import { getToken } from '../utils/storage'

const SearchObjectView = () => {
  const [resultados, setResultados] = useState([])
  const [mensaje, setMensaje] = useState('')

  const buscar = async (termino) => {
    setMensaje('')
    if (!termino.trim()) {
      setMensaje('Por favor escribí algo para buscar.')
      return
    }

    try {
      const res = await fetch(`http://localhost:5000/api/objects/search?q=${termino.toUpperCase()}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })

      const data = await res.json()
      if (res.ok) {
        if (data.length === 0) {
          setMensaje('No se encontraron objetos.')
        }
        setResultados(data)
      } else {
        setMensaje(data.msg || 'Error al buscar.')
      }
    } catch {
      setMensaje('No se pudo conectar al servidor.')
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <SearchObjectForm onSearch={buscar} />
      {mensaje && <p className="text-center text-red-600">{mensaje}</p>}
      <SearchResults results={resultados} />
    </div>
  )
}

export default SearchObjectView
