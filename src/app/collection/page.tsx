"use client";

import { useEffect, useState } from "react";

import { Filter } from "@/components/Filter";
import GameCard from "@/components/GameCard";
import Masonry from "react-masonry-css";

const Page = () => {
  const [games, setGames] = useState<
    {
      id: string;
      name: string;
      released: string;
      imageSrc: string;
      platforms: [];
      genres: [];
      metacritic: string;
      slug: string;
    }[]
  >([]);

  useEffect(() => {
    const storedGames = localStorage.getItem("zgames");
    if (storedGames) {
      setGames(JSON.parse(storedGames));
    }
  }, []);
  console.log(games);
  return (
    <div className="flex flex-col flex-1 items-center lg:items-start gap-4">
      <h1 className="font-extrabold text-2xl lg:text-7xl">All Games</h1>
      <p>Based on player counts and release date</p>
      <Filter />
      <Masonry
        breakpointCols={{ default: 4, 1200: 2, 700: 1, 500: 1 }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {games.map((game) => (
          <GameCard
            key={game.id}
            id={game.id}
            name={game.name}
            releaseDate={game.released}
            imageSrc={game.imageSrc}
            platforms={game.platforms}
            genres={game.genres}
            metacritic={game.metacritic}
            slug={game.slug}
          />
        ))}
      </Masonry>
      {/* <Pagination previous={games?.previous} next={games?.next} /> */}
    </div>
  );
};

export default Page;
