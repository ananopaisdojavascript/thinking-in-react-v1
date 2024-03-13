const ProductRow = ({ product }) => {
  // Verificar se o produto está em estoque. Se não, colocar o nome em vermelho
  const name = product.stocked ? product.name : (
    <span style={{ color: 'red' }}>
      {product.name}
    </span>
  )
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  )
}

export default ProductRow