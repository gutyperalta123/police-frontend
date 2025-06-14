import { useState } from 'react'
import { getToken } from '../utils/storage'

const AddObjectForm = () => {
  const [mensaje, setMensaje] = useState('')
  const [form, setForm] = useState({
    comisaria: '',
    tipo: '',
    numero_serie: '',
    imei: '',
    marca: '',
    modelo: '',
    color: '',
    numero_motor: '',
    numero_cuadro: '',
    numero_dominio: '',
    caracteristicas: '',
    denunciante: '',
    dni_denunciante: '',
    fiscal: '',
    descripcion: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value.toUpperCase() }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMensaje('')
    try {
      const response = await fetch('https://police-backend-dwup.onrender.com/api/objects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getToken()}`
        },
        body: JSON.stringify(form)
      })
      if (!response.ok) throw new Error('Error al registrar')
      setMensaje('Registro exitoso')
      setForm({
        comisaria: '',
        tipo: '',
        numero_serie: '',
        imei: '',
        marca: '',
        modelo: '',
        color: '',
        numero_motor: '',
        numero_cuadro: '',
        numero_dominio: '',
        caracteristicas: '',
        denunciante: '',
        dni_denunciante: '',
        fiscal: '',
        descripcion: ''
      })
    } catch (err) {
      setMensaje(err.message)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Agregar Objeto</h2>
      <div className="grid grid-cols-2 gap-4">
        {Object.keys(form).map((key) => (
          <input
            key={key}
            type="text"
            name={key}
            placeholder={key.replaceAll('_', ' ').toUpperCase()}
            value={form[key]}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
        ))}
      </div>
      <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Registrar
      </button>
      {mensaje && <p className="mt-2">{mensaje}</p>}
    </form>
  )
}

export default AddObjectForm
