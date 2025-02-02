import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      style={{
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#f8f9fa",
      }}
    >
      {/* Logo */}
      <div>
        <Link to="/">
          <img
            src="logo.png"
            alt="Logo de la tienda"
            style={{ height: "40px" }}
          />
        </Link>
      </div>

      {/* Links navegación */}
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "15px",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Inicio
          </Link>
        </li>
        <li>
          <Link
            to="/productos"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Productos
          </Link>
        </li>
        <li>
          <Link
            to="/categoria/tecnologia"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Tecnología
          </Link>
        </li>
        <li>
          <Link
            to="/categoria/ropa"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Ropa
          </Link>
        </li>
        <li>
          <Link
            to="/contacto"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Contacto
          </Link>
        </li>
      </ul>

      {/* Widget carrito */}
      <CartWidget />
    </nav>
  );
};

export default NavBar;
