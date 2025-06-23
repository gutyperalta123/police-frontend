import { useState } from 'react'
import { getToken } from '../utils/storage'

const AddObjectForm = () => {
  const [formData, setFormData] = useState({
    COMISARIA: '',
    TIPO: '',
    NUMERO_SERIE: '',
    IMEI: '',
    MARCA: '',
    MODELO: '',
    COLOR: '',
    NUMERO_MOTOR: '',
    NUMERO_CUADRO: '',
    NUMERO_DOMINIO: '',
    CARACTERISTICAS: '',
    DENUNCIANTE: '',
    DNI_DENUNCIANTE: '',
    FISCAL: '',
    DESCRIPCION: ''
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value.toUpperCase()
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const token = getToken()
      const res = await fetch('https://police-backend-dwup.onrender.com/api/objects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      })

      if (!res.ok) {
        const error = await res.json()
        alert(`❌ Error: ${error.message || 'No se pudo guardar el objeto'}`)
        return
      }

      alert('✅ Objeto registrado correctamente')
      setFormData({
        COMISARIA: '',
        TIPO: '',
        NUMERO_SERIE: '',
        IMEI: '',
        MARCA: '',
        MODELO: '',
        COLOR: '',
        NUMERO_MOTOR: '',
        NUMERO_CUADRO: '',
        NUMERO_DOMINIO: '',
        CARACTERISTICAS: '',
        DENUNCIANTE: '',
        DNI_DENUNCIANTE: '',
        FISCAL: '',
        DESCRIPCION: ''
      })
    } catch (err) {
      alert('❌ Error de conexión con el servidor')
    }
  }

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-md mt-4">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Registrar Objeto</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        {Object.keys(formData).map(key => (
          <input
            key={key}
            type="text"
            name={key}
            placeholder={key.replaceAll('_', ' ')}
            value={formData[key]}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 w-full uppercase"
            required
          />
        ))}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
        >
          Guardar Objeto
        </button>
      </form>
    </div>
  )
}

export default AddObjectForm
