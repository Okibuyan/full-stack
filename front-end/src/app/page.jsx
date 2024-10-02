"use client";
import { useEffect, useState } from "react";
import { Card, CreateModal } from "./components/ui";

export default function Home() {
  const [products, setProducts] = useState([]);

  const BACKEND_ENDPOINT = "https://full-stack-q1qi.onrender.com";

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${BACKEND_ENDPOINT}/products`);
      const responseData = await response.json();
      setProducts(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <div className="flex justify-center w-full">
      <div className="container p-8 flex flex-col gap-5">
        <div className="flex justify-end">
          <CreateModal />
        </div>
        <div className="flex  flex-wrap justify-between gap-6">
          {products?.map((product) => {
            return <Card product={product} />;
          })}
        </div>
      </div>
    </div>
  );
}
