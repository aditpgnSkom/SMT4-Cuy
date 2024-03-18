export const getMangaResponse = async (resource, query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  const manga = await response.json();
  return manga;
};
export const getAnimeResponse = async (resource, query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL_}/${resource}?${query}`
  );
  const anime = await response.json();
  return anime;
};
