import React from "react";
import { getMangaResponse } from "@/app/libs/api-libs";
import Image from "next/image";

const page = async ({ params: { id } }) => {
  const manga = await getMangaResponse(`manga/${id}`);

  return (
    <>
      <div className="pt-4 px-4">
        <h3 className=" text-color-primary text-2xl">
          {manga.data.title} -{" "}
          <span className="italic">{manga.data.status}</span>
        </h3>
      </div>
      <div className="pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto">
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3>PERINGKAT</h3>
          <p>{manga.data.rank}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3>SKOR</h3>
          <p>{manga.data.score}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3>SKOR DARI</h3>
          <p>{manga.data.scored_by}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3>FAVORIT</h3>
          <p>{manga.data.favorites}</p>
        </div>
      </div>
      <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary">
        <Image
          src={manga.data.images.jpg.image_url}
          alt={manga.data.title}
          width={250}
          height={250}
          className="w-full rounded object-cover"
        />
        <p className="text-justify text-xl">{manga.data.synopsis}</p>
      </div>
    </>
  );
};

export default page;
