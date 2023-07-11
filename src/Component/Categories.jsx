import { Link } from 'react-router-dom';

const Categories = () => {
  const categoria = [
    { id: 1, name: 'Categoria1'},
    { id: 2, name: 'Categoria2'},
    { id: 3, name: 'Categoria3'},
    { id: 4, name: 'Categoria4'},
    { id: 5, name: 'Categoria5'},
    { id: 6, name: 'Categoria6'},
  ];
  return (
    <div>
      <h2>Categorias</h2>
      <ul>
        {categoria.map((category) => (
          <li key={category.id}>
            <Link to={`/products/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;