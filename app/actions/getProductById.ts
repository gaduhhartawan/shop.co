import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

interface IParams {
  productId?: string;
}

export default async function getProductById(params: IParams) {
  try {
    const currentUser = await getCurrentUser();
    const { productId } = params;

    if (!currentUser) {
      return null;
    }

    if (!productId) {
      return null;
    }

    const product = await prisma.product.findUnique({
      where: {
        id: productId,
      },
      include: {
        user: true,
      },
    });

    if (!product) {
      return null;
    }

    return product;
  } catch (error: any) {
    throw new Error(error);
  }
}
