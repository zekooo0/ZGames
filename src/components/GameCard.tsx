"use client";

import Image from "next/image";
import Link from "next/link";
import { PlusIcon } from "lucide-react";
import { useState } from "react";

interface IPlatform {
  platform: {
    slug: string;
  };
}
interface IGenre {
  id: string;
  name: string;
}
interface GameCardProps {
  imageSrc: string;
  screenShots: string[];
  name: string;
  platforms: IPlatform[];
  releaseDate: string;
  genres: IGenre[];
  metacritic: string;
  slug: string;
  id: string;
}

const GameCard: React.FC<GameCardProps> = ({
  imageSrc,
  screenShots,
  name,
  platforms,
  releaseDate,
  genres,
  metacritic,
  slug,
  id,
}) => {
  const [hover, setHover] = useState(false);

  let filteredPlatforms = {
    pc: false,
    xbox: false,
    playstation: false,
    nintendo: false,
  };

  const filterPlatforms = platforms.forEach((platform) => {
    if (platform.platform.slug.startsWith("pc")) {
      filteredPlatforms.pc = true;
    } else if (platform.platform.slug.startsWith("xbox")) {
      filteredPlatforms.xbox = true;
    } else if (platform.platform.slug.startsWith("playstation")) {
      filteredPlatforms.playstation = true;
    } else if (platform.platform.slug.startsWith("nintendo")) {
      filteredPlatforms.nintendo = true;
    }
  });

  return (
    <div
      className={`relative bg-main shadow-md h-auto  ${
        hover
          ? "rounded-tl-lg rounded-tr-lg scale-105 transition-all duration-300 delay-100 z-30"
          : "rounded-lg"
      } `}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={name}
            width={600}
            height={600}
            className="rounded-tl-lg rounded-tr-lg object-contain"
          />
        )}
      </div>
      <div className={`p-4 pb-6`}>
        <div className="flex justify-between items-center mb-2">
          <div className="flex gap-2">
            {filteredPlatforms.pc && (
              <div>
                <Image src={"windows.svg"} alt="pc" width={15} height={15} />
              </div>
            )}
            {filteredPlatforms.playstation && (
              <div>
                <Image
                  src={"playstation.svg"}
                  alt="playstation"
                  width={15}
                  height={15}
                />
              </div>
            )}
            {filteredPlatforms.xbox && (
              <div>
                <Image src={"xbox.svg"} alt="xbox" width={15} height={15} />
              </div>
            )}

            {filteredPlatforms.nintendo && (
              <div>
                <Image
                  src={"nintendo.svg"}
                  alt="nintendo"
                  width={15}
                  height={15}
                />
              </div>
            )}
          </div>
          {metacritic && (
            <div
              className={`
              rounded-md text-xs
              px-2
              py-1
              font-bold
              border
              ${
                Number(metacritic) > 75
                  ? "border-[#6dc849] text-[#6dc849]"
                  : Number(metacritic) > 50
                  ? "border-[#fdca52] text-[#fdca52]"
                  : "border-red-800 text-red-800"
              }`}
            >
              {metacritic}
            </div>
          )}
        </div>
        <Link href={`/${slug}`} className="font-bold text-2xl leading-7">
          {name}
        </Link>
        <button className="flex justify-center items-center gap-2 mt-3 py-1 border rounded-md w-full text-center">
          <PlusIcon /> Add to my collection
        </button>
        {hover && (
          <div className="top-[99%] left-0 z-10 absolute flex flex-col gap-4 bg-main px-4 pt-0 pb-6 rounded-bl-lg rounded-br-lg w-full">
            <div className="flex justify-between items-center">
              <p> Release date</p> <p>{releaseDate}</p>
            </div>
            <div className="flex flex-wrap justify-between items-center">
              <p> Genres</p>{" "}
              <div className="flex flex-wrap items-center gap-1">
                {genres.map((genre, i) => (
                  <Link href={"/"} key={genre.id} className="underline">
                    {i !== genres.length - 1 ? genre.name + ", " : genre.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameCard;
