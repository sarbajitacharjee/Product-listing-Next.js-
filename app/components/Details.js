"use client";

// Product Listed Below

function Details({ product, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white mx-2 p-6 rounded shadow-lg flex flex-col md:flex-row gap-10 sm:w-2/3 lg:w-2/4">
      <img
        className="h-60 w-full md:h-48 mb-4"
        src={product.image}
        alt={product.title}
        
      />
        <div>
          <h2 className="text-2xl text-semibold font-semibold mb-4">
            {product.title}
          </h2>

          <p className="text-gray-700 text-sm leading-6 mb-4 line-clamp-6">
            {product.description}
          </p>

          { (product.rating.rate) >= 3.5 ? (
            <p className="text-sm text-green-800 text-bold mt-2">
              Rating: {product.rating.rate}*
            </p>
          ) : (
            <p className="text-sm text-red-800 text-bold mt-2">
              Rating: {product.rating.rate}*
            </p>
          )}

          <p className="text-2xl font-semibold mb-4">
            <span className="relative font-medium text-xl">Rs </span>
            {product.price}₹
          </p>
          <button
            onClick={onClose}
            className="px-4 py-2 border-red-700 border-2 hover:bg-red-200  text-red-700 text-bold rounded-lg w-24"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;
