import { Filter } from "@/components/Filter";
import Pagination from "@/components/Pagination";
import dynamic from "next/dynamic";
import { getGames } from "@/actions";

const RenderGameCards = dynamic(() => import("@/components/RenderGameCards"), {
  loading: () => <h1>Loading...</h1>,
});
const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const params = new URLSearchParams(
    searchParams as Record<string, string>
  ).toString();

  const games = await getGames(params);

  return (
    <div className="flex flex-col flex-1 items-center lg:items-start gap-4">
      <h1 className="font-extrabold text-2xl lg:text-7xl">All Games</h1>
      <p>Based on player counts and release date</p>
      <Filter />
      <RenderGameCards games={games} />
      <Pagination previous={games?.previous} next={games?.next} />
    </div>
  );
};

export default Page;
