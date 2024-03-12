import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
  const user = await getCurrentUser();

  if (user?.role !== "seller") {
    return NextResponse.error();
  }

  const body = await request.json();
  const { title, description, imageSrc, category, price } = body;

  const product = await prisma.product.create({
    data: {
      title,
      description,
      imageSrc,
      category,
      price,
      userId: user.id,
    },
  });

  return NextResponse.json(product);
}
