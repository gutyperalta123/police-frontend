import React, { useState } from 'react'
import CreateUserForm from '../components/CreateUserForm.jsx'
import SearchDeleteUser from '../components/SearchDeleteUser.jsx'

const AdminPanelView = () => {
  const [update, setUpdate] = useState(0)

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold mb-2">Crear nuevo usuario</h2>
        <CreateUserForm onCreate={() => setUpdate(prev => prev + 1)} />
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2">Buscar y Eliminar Usuario</h2>
        <SearchDeleteUser update={update} />
      </div>
    </div>
  )
}

export default AdminPanelView
