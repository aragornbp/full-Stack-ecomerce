import React, { useContext } from "react";
import { Badge } from "./ui/badge";
import { ShoppingCartIcon } from "lucide-react";
import { CartContext } from "@/providers/Cart";
import CartItem from "./CartItem";
import { computeProductTotalPrice } from "@/helpers/products";

const Cart = () => {
  const { products } = useContext(CartContext);

  return (
    <div className="flex flex-col gap-8">
      <Badge
        className="w-fit gap-2 border-2 border-primary px-3 py-2 text-base uppercase"
        variant="outline"
      >
        <ShoppingCartIcon size={16} />
        <p>Carrinho</p>
      </Badge>

      <div className="flex flex-col gap-5">
        {products.map((prod) => (
          <CartItem
            key={prod.name}
            product={computeProductTotalPrice(prod as any) as any}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
