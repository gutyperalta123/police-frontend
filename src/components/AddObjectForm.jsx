import React, { useState } from 'react'
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

  const [mensaje, setMensaje] = useState('')

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
      const res = await fetch('https://police-backend-dwup.onrender.com/api/objects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getToken()}`
        },
        body: JSON.stringify(formData)
      })

      if (res.ok) {
        setMensaje('Objeto registrado correctamente.')
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
      } else {
        setMensaje('Error al registrar el objeto.')
      }
    } catch (err) {
      setMensaje('Error de conexión con el servidor.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      {Object.keys(formData).map(key => (
        <div key={key}>
          <input
            type="text"
            name={key}
            placeholder={key}
            value={formData[key]}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
      ))}
      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
        Registrar
      </button>
      {mensaje && <p className="mt-2 text-sm">{mensaje}</p>}
    </form>
  )
}

export default AddObjectForm
