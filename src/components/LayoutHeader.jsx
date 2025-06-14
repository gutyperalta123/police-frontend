const LayoutHeader = ({ username, onLogout }) => {
  return (
    <div className="flex justify-between items-center bg-gray-800 text-white p-4">
      <h1 className="text-lg font-bold">APLICACIÓN POLICIAL</h1>
      <div>
        <span className="mr-4">{username}</span>
        <button onClick={onLogout} className="bg-red-500 px-4 py-2 rounded">
          Cerrar sesión
        </button>
      </div>
    </div>
  )
}

export default LayoutHeader
