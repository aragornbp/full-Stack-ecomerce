import Image from "next/image";
import Categories from "./components/Categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./components/Product-list";
import SectionTitle from "./components/Section-title";
import Banner from "./components/Banner";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: { gt: 0 },
    },
  });

  const mouses = await prismaClient.product.findMany({
    where: {
      Category: {
        slug: "mouses",
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      Category: {
        slug: "keyboards",
      },
    },
  });

  return (
    <div>
      <Banner src="/banner-home-1.png" alt="Até 55% de desconto" />

      <div className="mt-8">
        <Categories />
      </div>

      <div className="mt-8 px-5">
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>

      <Banner src="/banner-home-2.png" alt="Até 55% de desconto em mouses" />

      <div className="mt-8 px-5">
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards} />
      </div>

      <Banner src="/banner-home-3.png" alt="Até 55% de desconto em mouses" />

      <div className="mt-8 px-5">
        <SectionTitle>Mouses</SectionTitle>
        <ProductList products={mouses} />
      </div>
    </div>
  );
}
