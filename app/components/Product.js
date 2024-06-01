"use client";

import { FaCircleInfo } from "react-icons/fa6";

function Product({ product, onSelect }) {
  return (
    <div
      key={product.id}
      className="bg-white border max-h-full p-4 rounded shadow  h-full flex flex-col"
    >
      <img
        className="h-60 w-full md:h-48 mb-4"
        src={product.image}
        alt={product.title}
      />

      <div className="flex flex-col justify-between  flex-grow">
        <div>
          <h2 className="text-bold line-clamp-1 font-medium mt-2">
            {product.title}
          </h2>
          <p className="text-sm mt-2 bg-blue-300 py-0.5 px-2 rounded w-fit uppercase">
            {product.category}
          </p>

          {product.rating.rate >= 3.5 ? (
            <p className="text-sm text-green-800 text-bold mt-2">
              Rating: {product.rating.rate}* (Reviews: {product.rating.count})
            </p>
          ) : (
            <p className="text-sm text-red-800 text-bold mt-2">
              Rating: {product.rating.rate}* (Reviews: {product.rating.count})
            </p>
          )}
          <p className="text-lg font-semibold mt-2">
            <span className="relative  font-medium text-md"></span>Rs:
            {" " + product.price}₹
          </p>
        </div>
        <button
          onClick={() => onSelect(product)}
          className="text-sm flex justify-center items-center gap-2 font-medium mt-2 px-4 py-2 border-blue-700 border-2  text-blue-700 hover:bg-blue-200 rounded-2xl w-1/2"
        >
          <FaCircleInfo className="" /> Details
        </button>
      </div>
    </div>
  );
}
export default Product;
