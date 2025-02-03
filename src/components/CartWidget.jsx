import React from "react";
import { useCart } from "../context/CartContext";

const CartWidget = () => {
  const { totalItems, totalPrice } = useCart();

  return (
    <div style={{ position: "relative" }}>
      <span style={{ fontSize: "24px", cursor: "pointer" }}>🛒</span>
      {totalItems > 0 && (
        <div style={{ position: "absolute", top: "-5px", right: "-10px", background: "red", color: "white", borderRadius: "50%", padding: "5px 10px", fontSize: "12px" }}>
          {totalItems}
        </div>
      )}
      <p>Total: ${totalPrice}</p>
    </div>
  );
};

export default CartWidget;
