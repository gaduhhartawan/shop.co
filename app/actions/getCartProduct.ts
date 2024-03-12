import prisma from "@/app/libs/prismadb";

import getCurrentUser from "./getCurrentUser";

export default async function getCartProducts() {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) return [];

    const carts = await prisma.product.findMany({
      where: {
        id: {
          in: [...(currentUser.carts || [])],
        },
      },
    });

    return carts;
  } catch (error: any) {
    throw new Error(error);
  }
}
