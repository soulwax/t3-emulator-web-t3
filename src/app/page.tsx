import { api, } from "~/trpc/server";
import SimulatorLayout from "~/app/_components/simlayout";
import { HydrateClient } from "~/trpc/server";
export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main>
        <SimulatorLayout />
      </main >
    </HydrateClient >
  );
}
