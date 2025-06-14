const ObjectCard = ({ object }) => {
  return (
    <div className="border p-4 rounded shadow bg-white">
      {Object.entries(object).map(([key, value]) => (
        <p key={key}>
          <strong>{key.replaceAll('_', ' ').toUpperCase()}:</strong> {value}
        </p>
      ))}
    </div>
  )
}

export default ObjectCard
