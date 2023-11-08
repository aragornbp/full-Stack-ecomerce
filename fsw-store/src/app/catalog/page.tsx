import { Badge } from "@/components/ui/badge";
import { prismaClient } from "@/lib/prisma";
import { ShapesIcon } from "lucide-react";
import React from "react";
import CatalogItem from "./components/catalog-item";

const CatalogPage = async () => {
  const categories = await prismaClient.category.findMany({});

  return (
    <div className="flex flex-col gap-8 p-5">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-2 text-base uppercase"
        variant="outline"
      >
        <ShapesIcon size={16} />
        <p>Catálogo</p>
      </Badge>

      <div className="grid grid-cols-2 gap-6">
        {categories.map((category) => (
          <CatalogItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
