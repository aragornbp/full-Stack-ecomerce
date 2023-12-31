"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { iProductWithTotalPrice } from "@/helpers/products";
import { CartContext } from "@/providers/Cart";
import { Product } from "@prisma/client";
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  TruckIcon,
} from "lucide-react";
import React, { useContext, useState } from "react";

interface iProductInfo {
  product: iProductWithTotalPrice;
}

const ProductInfo = ({ product }: iProductInfo) => {
  const [qtd, setQtd] = useState(1);
  const { addProductCart } = useContext(CartContext);

  const handleDecreaseQtd = () => {
    setQtd((prev) => (prev === 1 ? prev : prev - 1));
  };

  const handleIncreaseQtd = () => {
    setQtd((prev) => prev + 1);
  };

  const handleAddToCart = () => {
    addProductCart({ ...product, quantity: qtd });
  };

  return (
    <div className="flex flex-col px-5">
      <h2 className="text-lg">{product.name}</h2>

      <div className="flex items-center gap-1">
        <h1 className="text-xl font-bold">{product.totalPrice.toFixed(2)}</h1>
        {product.discountPercentage > 0 && (
          <Badge className="px-2 py-[2px]">
            <ArrowDownIcon size={14} /> {product.discountPercentage}%
          </Badge>
        )}
      </div>
      {product.discountPercentage > 0 && (
        <p className="text-sm line-through opacity-75">
          R$ {Number(product.basePrice).toFixed(2)}
        </p>
      )}

      <div className="mt-4 flex items-center gap-4">
        <Button size="icon" variant="outline" onClick={handleDecreaseQtd}>
          <ArrowLeftIcon size={16} />
        </Button>

        <span>{qtd}</span>

        <Button size="icon" variant="outline" onClick={handleIncreaseQtd}>
          <ArrowRightIcon size={16} />
        </Button>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <h3 className="font-semibold">Descrição</h3>
        <p className="text-justify text-sm opacity-60">{product.description}</p>
      </div>

      <Button className="mt-8 font-bold uppercase" onClick={handleAddToCart}>
        Adicionar ao carrinho
      </Button>

      <div className="mt-5 flex items-center justify-between rounded-lg bg-accent px-5 py-2">
        <div className="flex items-center gap-4">
          <TruckIcon size={30} />
          <div className="flex flex-col">
            <p className="text-xs">
              Entrega via <span className="font-bold">FSPacket</span>
            </p>
            <p className="text-xs">
              Envio para <span className="font-bold">todo Brasil</span>
            </p>
          </div>
        </div>

        <p className="text-xs font-bold">Frete grátis</p>
      </div>
    </div>
  );
};

export default ProductInfo;
