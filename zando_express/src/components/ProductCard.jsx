import React from "react";

export const ProductCard = ({
  title,
  description,
  price,
  rating,
  images,
  children,
}) => {
  return (
    <div className="bg-slate-100/50 flex flex-col gap-3 border border-slate-50 rounded-md shadow-md px-5 py-3">
      <img src={images} alt="" />

      {/* div product info */}
      <div className="flex flex-col gap-3">
        <span className="flex items-center text-center justify-between">
          {/* Title and price */}
          <h1 className="text-green-700">{title}</h1>
          <h1 className="bg-green-100 p-2 text-sm rounded-md font-bold">
            {price}
          </h1>
        </span>

        {/* Description text */}
        <span className="flex flex-col gap-2">
          <p className="text-[13px] text-center text-slate-500">
            {description}
          </p>
          <p className="text-yellow-600 text-lg">Rate: {rating}</p>
        </span>

        <span></span>
      </div>

      <div>{children}</div>
    </div>
  );
};
