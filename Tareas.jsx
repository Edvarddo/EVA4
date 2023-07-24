import React, { useState } from 'react';

const MyComponent = () => {
  const [items, setItems] = useState([]);

  const addItem = () => {
    // Crear un nuevo objeto con los datos que desees añadir al arreglo
    const newItem = {
      id: items.length + 1,
      name: 'Nuevo Item',
      description: 'Descripción del nuevo item',
    };

    // Actualizar el estado del arreglo de objetos añadiendo el nuevo item
    setItems([...items, newItem]);
  };

  return (
    <div>
      <button onClick={addItem}>Añadir Item</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;