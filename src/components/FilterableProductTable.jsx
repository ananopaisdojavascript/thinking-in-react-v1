import { useState } from "react"
import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable"

const FilterableProductTable = ({ products }) => {
  // Filtrar os produtos
  const [filterText, setFilterText] = useState('')
  // Mostrar apenas os produtos em estoque
  const [inStockOnly, setInStockOnly] = useState(false)
  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  )
}

export default FilterableProductTable