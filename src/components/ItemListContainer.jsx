import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const productos = [
  { id: 1, nombre: "Remera 1", categoria: "ropa", precio: 10000, imagen: "/imagenes/remera1.png" },
  { id: 2, nombre: "Remera 2", categoria: "ropa", precio: 10000, imagen: "/imagenes/remera2.jpeg" },
  { id: 3, nombre: "Auto 1", categoria: "tecnologia", precio: 25000, imagen: "/imagenes/auto1.jpg" },
  { id: 4, nombre: "Auto 2", categoria: "tecnologia", precio: 30000, imagen: "/imagenes/auto2.jpg" },
  { id: 5, nombre: "Auto 3", categoria: "tecnologia", precio: 28000, imagen: "/imagenes/auto3.jpg" },
  { id: 6, nombre: "Auto 4", categoria: "tecnologia", precio: 35000, imagen: "/imagenes/auto4.jpg" },
];

const ItemListContainer = ({ greeting }) => {
  const { addToCart } = useCart();
  const [quantities, setQuantities] = useState({});
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todos");

  // Filtrar productos según la categoría seleccionada
  const productosFiltrados =
    categoriaSeleccionada === "todos"
      ? productos
      : productos.filter((producto) => producto.categoria === categoriaSeleccionada);

  const increment = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: (prev[id] || 1) + 1 }));
  };

  const decrement = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1,
    }));
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>{greeting}</h2>

      {/* Menú de categorías */}
      <nav>
        <button onClick={() => setCategoriaSeleccionada("todos")}>Todos</button>
        <button onClick={() => setCategoriaSeleccionada("ropa")}>Ropa</button>
        <button onClick={() => setCategoriaSeleccionada("tecnologia")}>Tecnología</button>
      </nav>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {productosFiltrados.map((producto) => (
          <div key={producto.id} style={{ margin: "20px", textAlign: "center", border: "1px solid #ccc", padding: "10px", borderRadius: "10px" }}>
            <h3>{producto.nombre}</h3>
            <img src={producto.imagen} alt={producto.nombre} width="200" />
            <p>Precio: ${producto.precio}</p>

            {/* Contador de cantidad */}
            <div>
              <button onClick={() => decrement(producto.id)}>-</button>
              <span style={{ margin: "0 10px" }}>{quantities[producto.id] || 1}</span>
              <button onClick={() => increment(producto.id)}>+</button>
            </div>

            {/* Botón Agregar al Carrito */}
            <button onClick={() => addToCart(producto, quantities[producto.id] || 1)}>
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
