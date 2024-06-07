import "./nav.scss";
import Cart from "../cart/cart.jsx";
import { useContext, useEffect, useRef } from "react";
import { cartContext } from "../../context/cartContext.jsx";

function Nav() {
  const { cartAmount } = useContext(cartContext);
  const nav = ["Collections", "Men", "Women", "About", "Contact"];
  let cartBtn = useRef();

  function toggle() {
    let icon = document.querySelector("nav");
    icon.classList.toggle("active");
  }

  function openCart() {
    let cart = document.querySelector(".cartDiv");
    cart.classList.toggle("active");
  }

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      const cart = document.querySelector(".cartDiv");
      const buttons = document.querySelector(".buttonsContainer");
      if (
        !cart.contains(e.target) &&
        !buttons.contains(e.target) &&
        !cartBtn.current.contains(e.target)
      ) {
        cart.classList.remove("active");
      }
    });
  });

  return (
    <header>
      <nav>
        <ul>
          {nav.map((item) => (
            <li key={item}>
              <a href="\">{item}</a>
            </li>
          ))}
        </ul>
      </nav>

      <button onClick={toggle} className="toggleBtn">
        <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
            fill="#69707D"
            fillRule="evenodd"
          />
        </svg>
      </button>

      <img id="logo" src="images\logo.svg" alt="Sneakers-Logo" />

      <div className="headerRight">
        <button ref={cartBtn} className="cartBtn" onClick={openCart}>
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fillRule="nonzero"
            />
          </svg>
          {cartAmount > 0 && <div className="cartAmount">{cartAmount}</div>}
        </button>
        <Cart />

        <button>
          <img id="avatar" src="images/image-avatar.png" alt="Avatar" />
        </button>
      </div>
    </header>
  );
}

export default Nav;
