import Link from "next/link";
import MangaListComponents from "@/components/MangaList";
import Header from "@/components/MangaList/Header";
import { getMangaResponse, getNestedMangaResponse } from "@/libs/api-libs";

export default async function Home() {
  const topManga = await getMangaResponse("top/manga", "limit=10");
  let rekomManga = await getNestedMangaResponse(
    "recommendations/manga",
    "entry"
  );
  const start = Math.floor(Math.random() * rekomManga.length);
  const end = start + 5;
  rekomManga = { data: rekomManga.slice(start, end) };

  return (
    <main>
      {/* Manga Paling Populer */}
      <section>
        <Header
          title="Paling Populer"
          linkHref={"/populer"}
          linkTitle={"Lihat Semua"}
        />
        <MangaListComponents data={topManga} />
      </section>
      {/* Manga Rekomendasi */}
      <section>
        <Header title="Rekomendasi Manga" />
        <MangaListComponents data={rekomManga} />
      </section>
    </main>
  );
}
