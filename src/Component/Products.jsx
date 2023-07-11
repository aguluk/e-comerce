import { useParams } from 'react-router-dom';
const Products = () => {
  const { id } = useParams();
  const products = [
    { id: 1, name: 'Producto 1' , category: 1 },
    { id: 2, name: 'Producto 2', category: 2 },
    { id: 3, name: 'Producto 3', category: 3 },
    { id: 4, name: 'Producto 4', category: 4 },
    { id: 5, name: 'Producto 5', category: 5 },
    { id: 6, name: 'Producto 6', category: 6 },
  ];
  const filteredProducts = products.filter((product) => product.category.toString() === id);

  return (
    <div>
      <h2>Productos</h2>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Products