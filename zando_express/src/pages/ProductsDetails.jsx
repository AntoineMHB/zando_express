import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductsContext";
import { TopNavBar } from "../components/TopNavBar";
import Container from "../components/ui/container";
import { Circle, Heart } from "lucide-react";
import { Button } from "../components/ui/button";

export const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useProducts();

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div className="w-screen">
      <TopNavBar />
      <div className="px-20 py-10 max-w-5xl mx-auto grid grid-cols-2 md:flex-row gap-8 ">
        <Container className="bg-gray-200">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full max-h-[400px] object-cover rounded-lg"
          />
        </Container>

        <div>
          <h1 className="text-3xl font-bold mt-5">{product.title}</h1>
          <div className="mt-4 flex items-center gap-5">
            <span className="text-2xl font-semibold">${product.price}</span>
            <span className="text-yellow-500">⭐ {product.rating}</span>
          </div>
          <p className="text-gray-600 mt-3 text-justify">
            {product.description}
          </p>
          <div className="h-[1px] my-5 bg-gray-300"></div>

          <div className="flex gap-5">
            <p>Colours: </p>
            <div className="flex gap-2">
              <Circle className="text-red-500 cursor-pointer" />
              <Circle className="text-blue-500 cursor-pointer" />
              <Circle className="text-green-500 cursor-pointer" />
              <Circle className="text-yellow-500 cursor-pointer" />
            </div>
          </div>

          <div className="flex gap-3 justify-stretch items-stretch mt-5">
            <div className="flex">
              <button className="bg-white/90 text-center  border px-3">
                -
              </button>
              <div className="border bg-white px-8">{product.quantity}</div>
              <button className="bg-black/90 text-center text-white px-3">
                +
              </button>
            </div>

            <button className="bg-black text-white  w-lg">Buy Now</button>

            <button className="bg-white text-center border px-3">
              <Heart size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
