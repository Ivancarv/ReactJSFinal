import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (item, quantity) => {
    setCart((prevCart) => [...prevCart, { ...item, quantity }]);
    setTotalItems((prevTotal) => prevTotal + quantity);
    setTotalPrice((prevTotal) => prevTotal + item.precio * quantity);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
