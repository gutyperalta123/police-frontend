import CreateUserForm from '../components/CreateUserForm'
import DeleteUserForm from '../components/DeleteUserForm'
import SearchDeleteUser from '../components/SearchDeleteUser'

const AdminPanelView = () => {
  return (
    <div className="space-y-8">
      <CreateUserForm />
      <DeleteUserForm />
      <SearchDeleteUser />
    </div>
  )
}

export default AdminPanelView
