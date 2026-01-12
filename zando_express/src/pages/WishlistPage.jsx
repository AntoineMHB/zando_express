import { useEffect, useState } from "react";
import { getCart, removeFromCart } from "../utils/cartStorage";
import Container from "../components/ui/container";
import { TopNavBar } from "../components/TopNavBar";
import { getWishlist, removeFromWishlist } from "../utils/wishlistStorage";

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    setWishlist(getWishlist());
  }, []);

  const handleRemove = (id) => {
    removeFromWishlist(id);
    setWishlist(getWishlist());
  };

  const total = wishlist.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="w-screen">
      <TopNavBar />
      <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>

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

      {wishlist.map((item) => (
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
        </div>
      ))}

      {/* checkout */}
      {wishlist.map((item) => {
        <Container>
          <div className="px-3 grid grid-cols-1">
            <p className="font-bold py-5">Cart Total</p>
            <div className="flex justify-end" key={item.id}>
              <p className="text-sm">Subtotal</p>
              <p className="text-sm">${item.price}</p>
            </div>
          </div>
        </Container>;
      })}

      <h2 className="text-xl font-bold mt-5">Total: ${total}</h2>
    </div>
  );
};

export default WishlistPage;
