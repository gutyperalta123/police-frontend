import React from 'react'
import DeleteUserForm from './components/DeleteUserForm.jsx'

const DeleteUserView = () => {
  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Eliminar usuario</h2>
      <DeleteUserForm />
    </div>
  )
}

export default DeleteUserView
