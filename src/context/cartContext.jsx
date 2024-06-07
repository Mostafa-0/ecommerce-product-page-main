import { createContext, useEffect, useState } from "react";

export const cartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartAmount, setCartAmount] = useState(0);

  useEffect(() => {
    if (cart) {
      setCartAmount(
        cart.reduce((accumulator, current) => {
          return accumulator + current.amount;
        }, 0)
      );
    }
  }, [cart]);

  useEffect(() => {
    if (cart) {
      setTotalPrice(
        cart.reduce((accumulator, current) => {
          return accumulator + current.amount * current.finalPrice;
        }, 0)
      );
    }
  }, [cart]);

  const increaseAmount = () => {
    setAmount((prevAmount) => prevAmount + 1);
  };
  const decreaseAmount = () => {
    if (amount > 0) {
      setAmount((prevAmount) => prevAmount - 1);
    }
  };

  // Add to cart
  const addToCart = (product, id) => {
    if (amount > 0) {
      setCart((prevCart) => {
        const cartItem = prevCart.find((item) => item.id === id);
        if (cartItem) {
          return prevCart.map((item) => {
            if (item.id === id) {
              return { ...item, amount: amount };
            } else return item;
          });
        } else {
          return [...prevCart, { ...product, amount: amount }];
        }
      });
    }
  };

  // Remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  return (
    <cartContext.Provider
      value={{
        amount,
        increaseAmount,
        decreaseAmount,
        totalPrice,
        cart,
        cartAmount,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
