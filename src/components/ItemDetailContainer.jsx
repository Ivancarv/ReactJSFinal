import { useState } from "react";
import { useCart } from "../context/CartContext";

const ItemDetailContainer = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  return (
    <div>
      <h2>{item.name}</h2>
      <img src={item.image} alt={item.name} width="200px" />
      <p>Precio: ${item.price}</p>

      <div>
        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>

      <button onClick={() => addToCart(item, quantity)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemDetailContainer;
