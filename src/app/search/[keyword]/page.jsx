import Link from "next/link";
import MangaListComponents from "@/components/MangaList";
import Header from "@/components/MangaList/Header";
import { getMangaResponse } from "@/libs/api-libs";

export default async function page({ params }) {
  const { keyword } = params;
  const decodeKeyword = decodeURI(keyword);
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/manga?q=${decodeKeyword}`
  // );
  // const searchManga = await response.json();

  const searchManga = await getMangaResponse("manga", `q=${decodeKeyword}`);

  return (
    <>
      <section>
        <Header title={`Pencarian untuk ${decodeKeyword}...`} />
        <MangaListComponents data={searchManga} />
      </section>
    </>
  );
}
