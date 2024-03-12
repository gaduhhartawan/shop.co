import prisma from "@/app/libs/prismadb";

export default async function getProducts() {
  try {
    const products = await prisma.product.findMany({
      take: 4,
    });

    return products;
  } catch (error) {
    return null;
  }
}
