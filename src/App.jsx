import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CategoryListContainer from "./components/CategoryListContainer";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/producto/:itemId" element={<ItemDetailContainer />} />
          <Route path="/categoria/:categoriaId" element={<CategoryListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contacto" element={<div>Contacto</div>} />
          <Route path="*" element={<div>Página no encontrada</div>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
