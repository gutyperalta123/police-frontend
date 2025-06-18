import React from 'react'
import CreateUserForm from './components/CreateUserForm'
import DeleteUserForm from './components/DeleteUserForm'
import SearchDeleteUser from './components/SearchDeleteUser'

const AdminPanelView = () => {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-lg font-semibold mb-2">Crear nuevo usuario</h2>
        <CreateUserForm />
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">Eliminar usuario por legajo</h2>
        <DeleteUserForm />
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">Buscar usuarios</h2>
        <SearchDeleteUser />
      </section>
    </div>
  )
}

export default AdminPanelView
