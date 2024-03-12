import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

export default async function getSellerProducts() {
  try {
    const currentUser = await getCurrentUser();

    if (currentUser?.role !== "seller") {
      return null;
    }

    const product = await prisma.product.findMany({
      where: {
        userId: currentUser.id,
      },
    });

    return product;
  } catch (error) {
    return null;
  }
}
