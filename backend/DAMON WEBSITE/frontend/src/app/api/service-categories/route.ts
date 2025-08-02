import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const categories = await prisma.serviceCategory.findMany({
    include: {
      services: true,
    },
    orderBy: {
      name: 'asc',
    },
  });

  return NextResponse.json(categories);
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const json = await request.json();
    const { name, description, image } = json;
    const slug = name.toLowerCase().replace(/\s+/g, '-');

    const category = await prisma.serviceCategory.create({
      data: {
        name,
        description,
        image,
        slug,
      },
    });

    return NextResponse.json(category);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
