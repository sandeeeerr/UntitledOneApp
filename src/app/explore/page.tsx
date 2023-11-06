import MusicCard from "@element/MusicCard";
import PageTitle from "@/components/modules/PageTitle";
import { redirect } from "next/navigation";
import { authOptions, getAuthSession } from "@/lib/auth";

export default async function ExplorePage() {
  const session = await getAuthSession();

  if (!session?.user) {
    redirect(authOptions?.pages?.signIn || "/login");
  }

  return (
    <>
      <PageTitle title="Explore" />

      <section className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
        <MusicCard title="Ringo" artist="Joris Voorn" />
        <MusicCard title="Ringo" artist="Joris Voorn" />
        <MusicCard title="Ringo" artist="Joris Voorn" />
        <MusicCard title="Ringo" artist="Joris Voorn" />
        <MusicCard title="Ringo" artist="Joris Voorn" />
        <MusicCard title="Ringo" artist="Joris Voorn" />
      </section>
    </>
  );
}
