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
        <div key={product.id} className="w-[170px] max-w-[170px]">
          <ProductItem product={computeProductTotalPrice(product)} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
