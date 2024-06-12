export const getGames = async (params: string) => {
  try {
    const res = await fetch(
      `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&${params}`
    );

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getSpecificGame = async (slug: string) => {
  try {
    const res = await fetch(
      `https://api.rawg.io/api/games/${slug}?key=${process.env.RAWG_API_KEY}`
    );
    const screenShots = await getSpecificGameScreenShots(slug);
    const trailer = await getSpecificGameTrailer(slug);
    let data = await res.json();
    if (trailer.count > 0) {
      data = { ...data, screenShots, trailer };
    } else {
      data = { ...data, screenShots };
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getSpecificGameScreenShots = async (slug: string) => {
  try {
    const res = await fetch(
      `https://api.rawg.io/api/games/${slug}/screenshots?key=${process.env.RAWG_API_KEY}`
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getSpecificGameTrailer = async (slug: string) => {
  try {
    const res = await fetch(
      `https://api.rawg.io/api/games/${slug}/movies?key=${process.env.RAWG_API_KEY}`
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
