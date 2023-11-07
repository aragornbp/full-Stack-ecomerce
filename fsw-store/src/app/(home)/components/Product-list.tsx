import ProductItem from "@/components/ProductItem";
import { computeProductTotalPrice } from "@/helpers/products";
import { Product } from "@prisma/client";
import React from "react";

interface iProductListProps {
  products: Product[];
}

const ProductList = ({ products }: iProductListProps) => {
  return (
    <div className="& [&::] [&::-webkit flex w-full gap-4 overflow-x-auto p-5 [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={computeProductTotalPrice(product)}
        />
      ))}
    </div>
  );
};

export default ProductList;
