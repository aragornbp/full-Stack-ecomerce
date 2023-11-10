import ProductItem from "@/components/ProductItem";
import { Badge } from "@/components/ui/badge";
import { computeProductTotalPrice } from "@/helpers/products";
import { prismaClient } from "@/lib/prisma";
import { ShapesIcon } from "lucide-react";
import React from "react";

const CategoryProducts = async ({ params }: any) => {
  const category = await prismaClient.category.findFirst({
    where: {
      slug: params.slug,
    },
    include: { products: true },
  });

  if (!category) {
    return null;
  }
  return (
    <div className="flex flex-col gap-8 p-5">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-2 text-base uppercase"
        variant="outline"
      >
        <ShapesIcon size={16} />
        <p>{params.slug}</p>
      </Badge>

      <div className="grid grid-cols-2 gap-6">
        {category.products.map((product) => (
          <ProductItem
            key={product.id}
            product={computeProductTotalPrice(product)}
          />
        ))}
      </div>
    </div>
  );
};
export default CategoryProducts;
