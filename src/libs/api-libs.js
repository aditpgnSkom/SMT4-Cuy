export const getMangaResponse = async (resource, query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  const manga = await response.json();
  return manga;
};

export const getNestedMangaResponse = async (resource, objectProperty) => {
  const response = await getMangaResponse(resource);
  return response.data.flatMap((item) => item.entry);
};
