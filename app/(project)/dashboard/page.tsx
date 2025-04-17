import { handleAuth } from "@/app/actions/handle-auth";
import { auth } from "@/app/lib/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  console.log("Session", session);
  return (
    <div className="flex flex-col gap-10 items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Protect Dashboard </h1>
      <p>
        {session?.user?.email ? session?.user?.email : "Usuário não Logado"}
      </p>
      {session?.user?.email && (
        <form action={handleAuth}>
          <button
            type="submit"
            className="border rounded-md px-2 py-1 cursor-pointer"
          >
            Sair
          </button>
        </form>
      )}
    </div>
  );
}
