import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

import getCurrentUser from "@/app/actions/getCurrentUser";
import getProductById from "@/app/actions/getProductById";

interface IParams {
  productId?: string;
}

export async function PATCH(request: Request, { params }: { params: IParams }) {
  const user = await getCurrentUser();
  const { productId } = params;
  const body = await request.json();
  const { title, description, imageSrc, category, price } = body;

  if (user?.role !== "seller") {
    return NextResponse.error();
  }

  if (!productId || typeof productId !== "string") {
    throw new Error("Invalid ID");
  }
  const product = await getProductById(params);

  if (product?.userId !== user.id) {
    return NextResponse.error();
  }

  const updateProduct = await prisma.product.updateMany({
    data: {
      title,
      description,
      imageSrc,
      category,
      price,
      userId: user.id,
    },
  });

  return NextResponse.json(updateProduct);
}

export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  const user = await getCurrentUser();

  if (user?.role !== "seller") {
    return NextResponse.error();
  }

  const { productId } = params;

  if (!productId || typeof productId !== "string") {
    throw new Error("Invalid ID");
  }

  const product = await prisma.product.deleteMany({
    where: {
      id: productId,
      userId: user.id,
    },
  });

  return NextResponse.json(product);
}
