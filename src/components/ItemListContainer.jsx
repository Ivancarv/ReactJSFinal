import React from "react";

const productos = [
  {
    id: 1,
    nombre: "Remera 1",
    categoria: "ropa",
    precio: 10000,
    imagen: "/imagenes/remera1.png",
  },
  {
    id: 2,
    nombre: "Remera 2",
    categoria: "ropa",
    precio: 10000,
    imagen: "/imagenes/remera2.jpeg",
  },
  {
    id: 3,
    nombre: "Auto 1",
    categoria: "tecnologia",
    precio: 25000,
    imagen: "/imagenes/auto1.jpg",
  },
  {
    id: 4,
    nombre: "Auto 2",
    categoria: "tecnologia",
    precio: 30000,
    imagen: "/imagenes/auto2.jpg",
  },
  {
    id: 5,
    nombre: "Auto 3",
    categoria: "tecnologia",
    precio: 28000,
    imagen: "/imagenes/auto3.jpg",
  },
  {
    id: 6,
    nombre: "Auto 4",
    categoria: "tecnologia",
    precio: 35000,
    imagen: "/imagenes/auto4.jpg",
  },
];

const ItemListContainer = ({ greeting }) => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>{greeting}</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {productos.map((producto) => (
          <div key={producto.id} style={{ margin: "20px", textAlign: "center" }}>
            <h3>{producto.nombre}</h3>
            <img src={producto.imagen} alt={producto.nombre} width="200" />
            <p>Precio: ${producto.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
