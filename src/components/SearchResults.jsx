import ObjectCard from './ObjectCard'

const SearchResults = ({ results }) => {
  if (!results.length) return null

  return (
    <div className="space-y-4">
      {results.map((obj) => (
        <ObjectCard key={obj._id} object={obj} />
      ))}
    </div>
  )
}

export default SearchResults
