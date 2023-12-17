import { useState } from "react";
import Slider from "../slider/slider";
import "./products.scss";

function Product(companyName, title, description, price, discount) {
  this.companyName = companyName;
  this.title = title;
  this.description = description;
  this.price = price.toFixed(2);
  this.discount = discount;
  this.finalPrice = (price - price * (discount / 100)).toFixed(2);
}

function Products({ openModal }) {
  const products = [
    new Product(
      "Sneaker Company",
      "Fall Limited Edition Sneakers",
      `These low-profile sneakers are your perfect casual wear companion. Featuring a 
        durable rubber outer sole, they’ll withstand everything the weather can offer.`,
      250,
      50
    ),
  ];

  const [count, setCount] = useState(0);
  function add() {
    setCount(count + 1);
  }
  function remove() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <main className="products">
      <h1 className="sr-only">Sneakers Shop</h1>
      <Slider openModal={openModal} />

      {products.map((product) => (
        <div key={product} className="productDetails">
          <h5>{product.companyName}</h5>
          <h3>{product.title}</h3>
          <p className="">{product.description}</p>

          <div className="priceContainer">
            <div className="currentPriceContainer">
              <span className="finalPrice">{"$" + product.finalPrice}</span>
              <span className="discount">{product.discount + "%"} </span>
            </div>
            <del className="originalPrice">{"$" + product.price}</del>
          </div>

          <div className="buttonsContainer">
            <div className="quantityDiv">
              <button onClick={remove}>
                <img src="images\icon-minus.svg" alt="Decrease quantity" />
              </button>
              <strong className="count">{count}</strong>
              <button onClick={add}>
                <img src="images\icon-plus.svg" alt="Increase quantity" />
              </button>
            </div>

            <button className="btnPrimary">
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="#fff"
                  fillRule="nonzero"
                />
              </svg>
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </main>
  );
}

export default Products;
