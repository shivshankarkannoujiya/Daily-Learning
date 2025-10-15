import React from "react";
import { useNotification } from "../context/NotificationContext";
import { useCartStore } from "../store/cartStore";

const ContactForm = () => {
  const { count, addNotification, resetNotification } = useNotification();
  const cartCount = useCartStore((state) => state.cart.length);
  const addToCart = useCartStore((state) => state.addToCart);
  const { removeFromCart, clearCart } = useCartStore();
  
  return (
    <div>
      <h1>Welcome to Contact</h1>
      <h2>COUNT: {count}</h2>
      <button onClick={addNotification}>Increment Count</button>
      <button onClick={resetNotification}>Reset Count</button>
    </div>
  );
};

export default ContactForm;
