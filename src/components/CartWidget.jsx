import React from "react";

const CartWidget = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
      <span role="img" aria-label="Carrito" style={{ fontSize: "24px" }}>🛒</span>
      <span style={{ marginLeft: "5px" }}>0</span>
    </div>
  );
};

export default CartWidget;