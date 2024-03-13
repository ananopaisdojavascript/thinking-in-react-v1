const SearchBar = ({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) => {
  return (
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="Search"
        onChange={(event) => onFilterTextChange(event.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(event) => onInStockOnlyChange(event.target.checked)}
        />
        {' '}
        Only show products in stock
      </label>

    </form>
  )
}

export default SearchBar