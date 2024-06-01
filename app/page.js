"use client";

import { useState, useEffect } from "react";
import Product from "./components/Product";
import ProductDetail from "./components/Details";
import Search from "./components/SearchBar";

 function Products() {
  const [item, setitem] = useState([]);
  const [searchitem, setsearchitem] = useState("");
  const [selectedProduct, setselectedProduct] = useState(null);
  const [load, setload] = useState(true);

  const fetchProducts = async () => {
    setload(true);
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setitem(data);
    } catch (error) {
      console.error("Failed", error);
    } finally {
      setload(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = item.filter((product) =>
    product.title.toLowerCase().includes(searchitem.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-blue-700  text-black">
      <header className="shadow bg-black">
        <div className="container mx-auto px-4 py-4 bg-black">
          <h1 className="text-2xl font-bold text-center  text-white ">
            Featured Products 
          </h1>
        </div>
      </header>

      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setselectedProduct(null)}
        />
      )}


      
      <main className="container  mx-auto px-4 py-8">
        <Search searchitem={searchitem} onSearch={setsearchitem} />

        {load ? (
          <div className="text-center item-center justify-center text-2xl text-white">Loading products...</div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center text-blue-100 text-bold text-3xl">
            No products like This...
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {filteredProducts.map((product) => (
              <Product
                key={product.id}
                product={product}
                onSelect={setselectedProduct}
              />
            ))}
          </div>
        )}
      </main>

      
    </div>
  );
}

export default Products