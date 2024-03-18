import Link from "next/link";
import MangaListComponents from "@/components/MangaList";
import Header from "@/components/MangaList/Header";
import { getMangaResponse } from "./libs/api-libs";

export default async function Home() {
  const topManga = await getMangaResponse("top/manga", "limit=10");

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
    </main>
  );
}
