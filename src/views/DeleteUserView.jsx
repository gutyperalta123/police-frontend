import React, { useState } from 'react'
import DeleteUserForm from '../components/DeleteUserForm.jsx'

const DeleteUserView = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-center">Eliminar Usuario</h2>
      <DeleteUserForm />
    </div>
  )
}

export default DeleteUserView
