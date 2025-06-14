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
    try {
      const res = await fetch('http://localhost:5000/api/objects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getToken()}`
        },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (res.ok) {
        setMensaje('✅ Objeto registrado correctamente.')
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
      } else {
        setMensaje(`❌ ${data.msg || 'Error al registrar objeto.'}`)
      }
    } catch {
      setMensaje('❌ Error de conexión con el servidor.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-xl shadow-lg max-w-xl mx-auto my-8 space-y-4">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Registrar Objeto</h2>

      {mensaje && <p className="text-center text-sm text-red-600">{mensaje}</p>}

      {[
        ['comisaria', 'COMISARÍA INTERVINIENTE'],
        ['tipo', 'TIPO DE OBJETO (EJ: CELULAR, BICICLETA)'],
        ['numero_serie', 'NÚMERO DE SERIE'],
        ['imei', 'IMEI (SI APLICA)'],
        ['marca', 'MARCA'],
        ['modelo', 'MODELO'],
        ['color', 'COLOR'],
        ['numero_motor', 'NÚMERO DE MOTOR'],
        ['numero_cuadro', 'NÚMERO DE CUADRO'],
        ['numero_dominio', 'DOMINIO / PATENTE'],
        ['caracteristicas', 'CARACTERÍSTICAS DESTACADAS'],
        ['denunciante', 'DENUNCIANTE'],
        ['dni_denunciante', 'DNI DEL DENUNCIANTE'],
        ['fiscal', 'FISCAL INTERVINIENTE']
      ].map(([name, placeholder]) => (
        <input
          key={name}
          type="text"
          name={name}
          value={form[name]}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded shadow-sm"
        />
      ))}

      <textarea
        name="descripcion"
        value={form.descripcion}
        onChange={handleChange}
        placeholder="DESCRIPCIÓN DETALLADA"
        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded shadow-sm resize-none"
        rows="4"
      ></textarea>

      <button type="submit" className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 font-semibold">
        Registrar Objeto
      </button>
    </form>
  )
}

export default AddObjectForm
