import { useRef } from "react";
import Nav from "./components/nav/nav.jsx";
import Products from "./components/products/products.jsx";
import Modal from "./components/modal/modal.jsx";
import "./main.scss";
import { CartProvider } from "./context/cartContext.jsx";

function App() {
  const modal = useRef();

  const openModal = () => {
    modal.current.showModal();
  };

  const closeModal = () => {
    modal.current.close();
  };

  return (
    <>
      <CartProvider>
        <Nav />
        <Products openModal={openModal} />
        <Modal modal={modal} closeModal={closeModal} />
      </CartProvider>
    </>
  );
}

export default App;
