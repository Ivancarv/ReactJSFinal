import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CategoryListContainer from "./components/CategoryListContainer";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/producto/:itemId" element={<ItemDetailContainer />} />
        <Route path="/categoria/:categoriaId" element={<CategoryListContainer />} />
        <Route path="/contacto" element={<div>Contacto</div>} />
        <Route path="*" element={<div>Página no encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
