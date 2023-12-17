import { useRef } from "react";
import "./modal.scss";
import Slider from "../slider/slider";

function Modal({ openModal, closeModal, modal }) {
  const style = {
    position: "absolute",
    top: "30%",
    left: "19%",
    width: "400px",
    height: "400px",
    border: "1px solid black",
    opacity: 0,
  };

  return (
    <>
      {/* <button onClick={openModal} style={style}>
        Open
      </button> */}
      <dialog ref={modal}>
        <button className="closeModal" onClick={() => closeModal()}>
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fillRule="evenodd"
            />
          </svg>
        </button>
        <Slider />
      </dialog>
    </>
  );
}

export default Modal;
