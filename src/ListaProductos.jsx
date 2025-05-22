import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ListaProductos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get('https://backend-inventario.onrender.com/api/productos')
      .then(res => setProductos(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Productos</h2>
      <ul>
        {productos.map(p => (
          <li key={p.id}>{p.nombre} - {p.cantidad}</li>
        ))}
      </ul>
    </div>
  );
}
