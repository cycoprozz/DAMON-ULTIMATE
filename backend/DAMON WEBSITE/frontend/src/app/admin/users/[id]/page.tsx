import { prisma } from "@/lib/prisma";
import { EditUserForm } from "./EditUserForm";

interface Props {
  params: {
    id: string;
  };
}

async function getUser(id: string) {
  const user = await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
      company: true,
      role: true,
      status: true,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  return user;
}

export default async function EditUserPage({ params }: Props) {
  const user = await getUser(params.id);

  return (
    <div>
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Edit User
          </h2>
        </div>
      </div>

      <div className="mt-8">
        <EditUserForm user={user} />
      </div>
    </div>
  );
}
