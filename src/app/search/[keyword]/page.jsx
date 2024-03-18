import Link from "next/link";
import MangaListComponents from "@/components/MangaList";
import Header from "@/components/MangaList/Header";

export default async function page({ params }) {
  const { keyword } = params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/manga?q=${keyword}`
  );
  const searchManga = await response.json();

  return (
    <>
      <section>
        <Header title={`Pencarian untuk ${keyword}...`} />
        <MangaListComponents data={searchManga} />
      </section>
    </>
  );
}
