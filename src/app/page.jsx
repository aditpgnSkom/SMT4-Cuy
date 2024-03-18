import Link from "next/link";
import MangaListComponents from "@/components/MangaList";
import Header from "@/components/MangaList/Header";

export default async function Home() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/manga?limit=8`
  );
  const topManga = await response.json();

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
