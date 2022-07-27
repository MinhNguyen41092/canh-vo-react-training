import { useState, useMemo } from "react";

const UseMemoEx = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [products, setProducts] = useState([])

  const handleSubmit = () => {
    setProducts([...products, {
      name,
      price: parseInt(price)
    }])
  }

  const total = useMemo(() => {
    const result = products.reduce((result, prod) => result + prod.price, 0)
    return result
  }, [products])

  return (
    <div>
      <h1>useMemo Ex</h1>
      <input
        value= {name}
        placeholder = 'name'
        onChange={e => setName(e.target.value)}
      />
      <br />
      <input 
        value= {price}
        placeholder = 'price'
        onChange={e => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>ADD</button>
      <br />
      Total: {total}
      <ul> {products.map(product => (
        <li key={product.name}>{product.name}-{product.price}</li>
      ))}</ul>
    </div>
  )
}

export default UseMemoEx