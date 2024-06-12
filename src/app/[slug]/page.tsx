import GameImages from "@/components/GameImages";
import Image from "next/image";
import { PlusIcon } from "lucide-react";
import { getSpecificGame } from "@/actions";

const page = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const game = await getSpecificGame(slug);
  let filteredPlatforms = {
    pc: false,
    xbox: false,
    playstation: false,
    nintendo: false,
  };

  const filterPlatforms = game?.parent_platforms.forEach((platform: any) => {
    if (platform.platform.slug === "pc") {
      filteredPlatforms.pc = true;
    } else if (platform.platform.slug === "xbox") {
      filteredPlatforms.xbox = true;
    } else if (platform.platform.slug === "playstation") {
      filteredPlatforms.playstation = true;
    } else if (platform.platform.slug === "nintendo") {
      filteredPlatforms.nintendo = true;
    }
  });
  const ratingTop = game?.rating_top;
  const rating = game?.ratings.find((item: any) => (item.id = ratingTop));

  return (
    <>
      <div className={`px-4 md:px-8 lg:px-16 block lg:hidden`}>
        <div className="flex flex-col items-center gap-8">
          <div className="flex justify-center items-center gap-4 text-xs">
            <div className="bg-white px-1 py-[2px] rounded-md text-black">
              {game.released}
            </div>
            <div className="flex items-center gap-1">
              <Image src={"/windows.svg"} alt="" width={15} height={15} />
              <Image src={"/xbox.svg"} alt="" width={15} height={15} />
              <Image src={"/playstation.svg"} alt="" width={15} height={15} />
            </div>
            <div>AVERAGE PLAYTIME: {game.playtime} HOURS</div>
          </div>
          <h1 className="font-black text-4xl text-bold text-center tracking-wider">
            {game.name}
          </h1>
          <div>
            <div>
              <GameImages
                images={game.screenShots.results}
                trailers={game?.trailer?.results}
              />
            </div>
          </div>
          <h3 className="font-bold text-2xl text-center">
            {rating.title}
            {rating.id === 5 && <span>🎯</span>}
            {rating.id === 4 && <span>👍</span>}
            {rating.id === 3 && <span>😑</span>}
            {rating.id === 1 && <span>⛔</span>}
          </h3>
          <div className="flex justify-center items-center">
            <button className="flex justify-center items-center gap-2 mt-3 px-1 py-1 border rounded-md w-full text-center">
              <PlusIcon /> Add to my collection
            </button>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <h3>About</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: game.description.split("Español")[0],
                }}
              />
            </div>
            <div className="flex gap-4">
              <div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-gray-600">Platforms</h3>
                  <div className="flex flex-wrap gap-2">
                    {filteredPlatforms.pc && (
                      <Image
                        src={"/windows.svg"}
                        alt="pc"
                        width={15}
                        height={15}
                      />
                    )}
                    {filteredPlatforms.playstation && (
                      <Image
                        src={"/playstation.svg"}
                        alt="playstation"
                        width={15}
                        height={15}
                      />
                    )}
                    {filteredPlatforms.xbox && (
                      <Image
                        src={"/xbox.svg"}
                        alt="xbox"
                        width={15}
                        height={15}
                      />
                    )}
                    {filteredPlatforms.nintendo && (
                      <Image
                        src={"/nintendo.svg"}
                        alt="nintendo"
                        width={15}
                        height={15}
                      />
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="text-gray-600">Genre</h3>
                  <ul className="flex flex-wrap items-center gap-2">
                    {game.genres.map((genre: any, i: number) => (
                      <li key={genre.id}>
                        {" "}
                        {i !== game.genres.length - 1
                          ? `${genre.name}, `
                          : genre.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-gray-600">Developer</h3>
                  <ul className="flex flex-wrap items-center gap-2">
                    {game.developers.map((developer: any, i: number) => (
                      <li key={developer.id}>
                        {i !== game.developers.length - 1
                          ? `${developer.name}, `
                          : developer.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-gray-600">Age rating</h3>
                  <div> {game.esrb_rating.name}</div>
                </div>
                <div>
                  <h3 className="text-gray-600">Tags</h3>
                  <ul className="flex flex-wrap gap-1">
                    {" "}
                    {game.tags.map((tag: any, i: number) => (
                      <li key={tag.id}>
                        {i !== game.tags.length - 1
                          ? `${tag.name}, `
                          : tag.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div>
                  <h3 className="text-gray-600"> Metascore</h3>
                  <div>
                    {game.metacritic && (
                      <div
                        className={`rounded-md text-xs px-2 py-1 font-bold border w-fit
                      ${
                        Number(game.metacritic) > 75
                          ? "border-[#6dc849] text-[#6dc849]"
                          : Number(game.metacritic) > 50
                          ? "border-[#fdca52] text-[#fdca52]"
                          : "border-red-800 text-red-800"
                      }`}
                      >
                        {game.metacritic}
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="text-gray-600">Release date</h3>
                  <div> {game.released}</div>
                </div>
                <div>
                  <h3 className="text-gray-600">Publisher</h3>
                  <ul>
                    {game.publishers.map((publisher: any, i: number) => (
                      <li key={publisher.id}>
                        {" "}
                        {i !== game.publishers.length - 1
                          ? `${publisher.name}, `
                          : publisher.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-gray-600">Website</h3>
                  <a href={game.website} className="underline" target="_blank">
                    {" "}
                    {game.website}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ========================================= */}
      <div className={`px-4 md:px-8 lg:px-16 hidden lg:block relative`}>
        <div className="flex gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex justify-center items-center gap-4 text-xs">
              <div className="bg-white px-1 py-[2px] rounded-md text-black">
                {game.released}
              </div>
              <div className="flex items-center gap-1">
                <Image src={"/windows.svg"} alt="" width={15} height={15} />
                <Image src={"/xbox.svg"} alt="" width={15} height={15} />
                <Image src={"/playstation.svg"} alt="" width={15} height={15} />
              </div>
              <div>AVERAGE PLAYTIME: {game.playtime} HOURS</div>
            </div>
            <h1 className="font-black text-5xl text-bold text-center tracking-wider">
              {game.name}
            </h1>
            <h3 className="font-bold text-2xl text-center">
              {rating.title} {rating.id === 5 && <span>🎯</span>}
              {rating.id === 4 && <span>👍</span>}
              {rating.id === 3 && <span>😑</span>}
              {rating.id === 1 && <span>⛔</span>}
            </h3>
            <div className="flex justify-center items-center">
              <button className="flex justify-center items-center gap-2 mt-3 px-1 py-1 border rounded-md w-fit text-center">
                <PlusIcon /> Add to my collection
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <h3>About</h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: game.description.split("Español")[0],
                  }}
                />
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-gray-600">Platforms</h3>
                    <div className="flex flex-wrap gap-2">
                      {filteredPlatforms.pc && (
                        <Image
                          src={"/windows.svg"}
                          alt="pc"
                          width={15}
                          height={15}
                        />
                      )}
                      {filteredPlatforms.playstation && (
                        <Image
                          src={"/playstation.svg"}
                          alt="playstation"
                          width={15}
                          height={15}
                        />
                      )}
                      {filteredPlatforms.xbox && (
                        <Image
                          src={"/xbox.svg"}
                          alt="xbox"
                          width={15}
                          height={15}
                        />
                      )}
                      {filteredPlatforms.nintendo && (
                        <Image
                          src={"/nintendo.svg"}
                          alt="nintendo"
                          width={15}
                          height={15}
                        />
                      )}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-gray-600">Genre</h3>
                    <ul className="flex flex-wrap items-center gap-2">
                      {game.genres.map((genre: any, i: number) => (
                        <li key={genre.id}>
                          {" "}
                          {i !== game.genres.length - 1
                            ? `${genre.name}, `
                            : genre.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-gray-600">Developer</h3>
                    <ul className="flex flex-wrap items-center gap-2">
                      {game.developers.map((developer: any, i: number) => (
                        <li key={developer.id}>
                          {i !== game.developers.length - 1
                            ? `${developer.name}, `
                            : developer.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-gray-600">Age rating</h3>
                    <div> {game.esrb_rating.name}</div>
                  </div>
                  <div>
                    <h3 className="text-gray-600">Tags</h3>
                    <ul className="flex flex-wrap gap-1">
                      {" "}
                      {game.tags.map((tag: any, i: number) => (
                        <li key={tag.id}>
                          {i !== game.tags.length - 1
                            ? `${tag.name}, `
                            : tag.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-gray-600"> Metascore</h3>
                    <div>
                      {game.metacritic && (
                        <div
                          className={`rounded-md text-xs px-2 py-1 font-bold border w-fit
                      ${
                        Number(game.metacritic) > 75
                          ? "border-[#6dc849] text-[#6dc849]"
                          : Number(game.metacritic) > 50
                          ? "border-[#fdca52] text-[#fdca52]"
                          : "border-red-800 text-red-800"
                      }`}
                        >
                          {game.metacritic}
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-gray-600">Release date</h3>
                    <div> {game.released}</div>
                  </div>
                  <div>
                    <h3 className="text-gray-600">Publisher</h3>
                    <ul>
                      {game.publishers.map((publisher: any, i: number) => (
                        <li key={publisher.id}>
                          {" "}
                          {i !== game.publishers.length - 1
                            ? `${publisher.name}, `
                            : publisher.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-gray-600">Website</h3>
                    <a
                      href={game.website}
                      className="underline"
                      target="_blank"
                    >
                      {" "}
                      {game.website}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="top-0 sticky h-fit">
            <GameImages
              images={game.screenShots.results}
              trailers={game?.trailer?.results}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
