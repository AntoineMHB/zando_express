import React from "react";
import { Button } from "./ui/button";
import { useCart } from "../context/CartContext";
import { addToCart } from "../utils/cartStorage";

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
    addToCart({
      id,
      title,
      price,
      image: productImage,
    });
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
            {description}
          </p>
          <p className="text-yellow-600 text-lg">Rate: {rating}</p>
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
