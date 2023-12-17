import React, { useState, useRef } from "react";
import Nav from "./components/nav/nav";
import Products from "./components/products/products";
import Modal from "./components/modal/modal";
const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const modal = useRef();

  const openModal = (currentIndex) => {
    console.log("open");
    if (currentIndex) {
      modal.current.showModal();
    }
  };

  const closeModal = () => {
    console.log("close");
    modal.current.close();
  };
  return (
    <>
      <Nav />
      <Products openModal={openModal} />
      <Modal modal={modal} openModal={openModal} closeModal={closeModal} />
    </>
  );
};

export default App;
