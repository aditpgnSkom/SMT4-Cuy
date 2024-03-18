/* eslint-disable @next/next/no-async-client-component */
"use client";

import MangaListComponents from "@/components/MangaList";
import HeaderMenu from "@/components/Util/HeaderMenu";
import Pagination from "@/components/Util/Pagination";
import { useEffect, useState } from "react";
import { getMangaResponse } from "@/libs/api-libs";

const Page = async () => {
  const [page, setPage] = useState(1);
  const [manga, setManga] = useState([]);

  const fetchData = async () => {
    const topManga = await getMangaResponse("top/manga", `page=${page}`);
    setManga(topManga);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div>
      <HeaderMenu title={`Manga Paling Populer #${page}`} />
      <MangaListComponents data={manga} />
      <Pagination
        page={page}
        lastPage={manga.pagination?.last_visible_page}
        setPage={setPage}
      />
    </div>
  );
};

export default Page;
