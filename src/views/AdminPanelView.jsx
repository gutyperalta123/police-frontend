import React, { useState } from 'react'
import CreateUserForm from '../components/CreateUserForm.jsx'
import SearchDeleteUser from '../components/SearchDeleteUser.jsx'

const AdminPanelView = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Panel de Administración</h2>
      
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2 text-center">Crear Nuevo Usuario</h3>
        <CreateUserForm />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2 text-center">Buscar y Eliminar Usuario</h3>
        <SearchDeleteUser />
      </div>
    </div>
  )
}

export default AdminPanelView
