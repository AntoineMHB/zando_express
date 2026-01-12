import { useEffect, useState } from "react";
import { getCart, removeFromCart } from "../utils/cartStorage";
import Container from "../components/ui/container";
import { TopNavBar } from "../components/TopNavBar";

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const handleRemove = (id) => {
    removeFromCart(id);
    setCart(getCart());
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="w-screen">
      <TopNavBar />
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      <div className="flex items-center justify-center">
        <Container className="h-[72px] w-[1170px]">
          <div className="flex gap-70 px-2 py-2">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>
        </Container>
      </div>

      {cart.map((item) => (
        <div className="flex items-center justify-center mt-5">
          <Container className="h-[72px] w-[1170px]">
            <div className="flex gap-20 px-2 py-2">
              <div className="flex gap-2">
                <div
                  className="h-[40px] w-[40px] border-gray-950 rounded-2xl"
                  key={item.id}
                >
                  <img src={item.image} />
                </div>
              </div>
              <p className="text-sm font-bold">{item.title}</p>
              <p>${item.price}</p>
              <p>Qty: {item.quantity}</p>
              <p>Subtotal</p>

              <div className="flex items-center justify-center gap-3">
                {/* <p>${item.price * item.quantity}</p> */}
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500"
                >
                  Remove
                </button>
              </div>
            </div>
          </Container>

          {/* checkout */}
          <Container>
            <div className="px-3 grid grid-cols-1">
              <p className="font-bold py-5">Cart Total</p>
              <div className="flex justify-end">
                <p className="text-sm">Subtotal</p>
                <p className="text-sm">${item.price}</p>
              </div>
            </div>
          </Container>
        </div>
      ))}

      {cart.length === 0 && <p>Your cart is empty</p>}

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b py-3"
        >
          <div>
            <h2 className="font-semibold">{item.title}</h2>
            <p>Qty: {item.quantity}</p>
          </div>

          <div className="flex items-center gap-3">
            <p>${item.price * item.quantity}</p>
            <button
              onClick={() => handleRemove(item.id)}
              className="text-red-500"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <h2 className="text-xl font-bold mt-5">Total: ${total}</h2>
    </div>
  );
};

export default CartPage;
