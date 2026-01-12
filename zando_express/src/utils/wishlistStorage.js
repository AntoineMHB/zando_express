export const getWishlist = () => {
  const wishlist = localStorage.getItem("wishlist");
  return wishlist ? JSON.parse(wishlist) : [];
};

export const addToWishlist = (product) => {
  const wishlist = getWishlist();

  const existing = wishlist.find((item) => item.id === product.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    wishlist.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("wishlist", JSON.stringify(wishlist));

  // notify navbar/cart icon
  window.dispatchEvent(new Event("wishlistUpdated"));
};

export const removeFromWishlist = (id) => {
  const wishlist = getWishlist().filter((item) => item.id !== id);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));

  // notify navbar/cart icon
  window.dispatchEvent(new Event("wishlistUpdated"));
};
