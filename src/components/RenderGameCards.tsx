"use client";

import Masonry from "react-masonry-css";
import dynamic from "next/dynamic";

const GameCard = dynamic(() => import("./GameCard"), {
  loading: () => <h1>Loading...</h1>,
});
interface IGames {
  results: IGame[];
}

interface IPlatform {
  platform: {
    slug: string;
  };
}
interface IGenre {
  id: string;
  name: string;
}
interface IGame {
  id: string;
  name: string;
  released: string;
  background_image: string;
  platforms: IPlatform[];
  genres: IGenre[];
  short_screenshots: string[];
  metacritic: string;
  slug: string;
}
const RenderGameCards = ({ games }: { games: IGames }) => {
  return (
    <Masonry
      breakpointCols={{ default: 4, 1200: 2, 700: 1, 500: 1 }}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {games.results.map((game) => (
        <GameCard
          key={game.id}
          id={game.id}
          name={game.name}
          releaseDate={game.released}
          imageSrc={game.background_image}
          platforms={game.platforms}
          genres={game.genres}
          screenShots={game.short_screenshots}
          metacritic={game.metacritic}
          slug={game.slug}
        />
      ))}
    </Masonry>
  );
};

export default RenderGameCards;
