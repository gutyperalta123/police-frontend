// frontend/src/components/AddObjectForm.jsx
import { useState } from 'react'
import { getToken, API_URL } from '../utils/storage'
import { API_URL } from '../utils/storage'


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

    try {
      const res = await fetch(`${API_URL}/api/objects`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getToken()}`
        },
        body: JSON.stringify(form)
      })

      if (!res.ok) {
        throw new Error('Error al guardar el objeto')
      }

      setMensaje('Objeto guardado con éxito')
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
      setMensaje('No se pudo guardar el objeto')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
      <h2 className="text-lg font-bold mb-2">Registrar Objeto</h2>
      {Object.keys(form).map((key) => (
        <input
          key={key}
          type="text"
          name={key}
          value={form[key]}
          placeholder={key.replace(/_/g, ' ').toUpperCase()}
          onChange={handleChange}
          className="w-full mb-2 p-2 border rounded"
          required
        />
      ))}
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Guardar
      </button>
      {mensaje && <p className="mt-2 text-sm">{mensaje}</p>}
    </form>
  )
}

export default AddObjectForm
