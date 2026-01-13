import React, { useState } from "react";
import { Button } from "./ui/button";
import { useCart } from "../context/CartContext";
import { addToCart } from "../utils/cartStorage";
import { Heart } from "lucide-react";
import { addToWishlist } from "../utils/wishlistStorage";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

export const ProductCard = ({
  id,
  title,
  description,
  price,
  rating,
  images,
  children,
}) => {
  const productImage = Array.isArray(images) ? images[0] : images;

  const handleAddToCart = () => {
    if (!loggedInUser) {
      toast.warning("Please log in to add items to your cart.");
      return;
    }
    addToCart({
      id,
      title,
      price,
      image: productImage,
    });

    toast.success("Added to cart!");
  };

  const [liked, setLiked] = useState(false);
  const { loggedInUser } = useAuth();
  console.log("Logged in user in ProductCard:", loggedInUser);

  const handleAddToWishlist = () => {
    if (!loggedInUser) {
      toast.warning("Please log in to add items to your wishlist.");
      return;
    }
    addToWishlist({
      id,
      title,
      price,
      image: productImage,
    });

    toast.success("Added to wishlist!");

    setLiked((prev) => !prev);
  };

  return (
    <div className="bg-slate-100/50 min-w-min flex flex-col gap-3 border border-slate-50 rounded-md shadow-md px-5 py-3">
      <img src={images} alt="" />

      {/* div product info */}
      <div className="flex flex-col gap-3">
        <span className="flex items-center text-center justify-between">
          {/* Title and price */}
          <h1 className="text-green-700">{title}</h1>
          <h1 className="bg-green-100 p-2 text-sm rounded-md font-bold">
            ${price}
          </h1>
        </span>

        {/* Description text */}

        <span className="flex flex-col gap-2 ">
          <p className="text-[13px]  text-slate-500 text-justify">
            {/* {description} */}
          </p>
          <div className="flex space-x-10">
            <p className="text-yellow-600 text-lg">Rate: {rating}</p>

            <Heart
              size={20}
              onClick={handleAddToWishlist}
              className={`cursor-pointer transition-colors duration-200 ${
                liked ? "text-black fill-black" : "text-gray-700"
              }`}
            />
          </div>
        </span>

        <Button
          onClick={handleAddToCart}
          className="bg-black text-white font-bold mt-auto"
        >
          Add to Cart
        </Button>
      </div>

      <div>{children}</div>
    </div>
  );
};
