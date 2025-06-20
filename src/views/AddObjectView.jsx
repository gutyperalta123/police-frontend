import React from 'react'
import AddObjectForm from '../components/AddObjectForm.jsx'
import LayoutHeader from '../components/LayoutHeader.jsx'

const AddObjectView = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <LayoutHeader />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Registrar Objeto</h2>
        <AddObjectForm />
      </div>
    </div>
  )
}

export default AddObjectView
