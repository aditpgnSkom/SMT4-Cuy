import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MangaListComponents({ data }) {
  return (
    <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {data.data?.map((item) => {
        return (
          <Link
            href={`/manga/${item.mal_id}`}
            className="cursor-pointer text-color-primary hover:text-color-accent transition-all"
            key={item.mal_id}
          >
            <Image
              src={item.images.webp.image_url}
              alt={item.images.jpg.image_url}
              width={350}
              height={350}
              className="w-full max-h-64 object-cover"
            />
            <h3 className="font-bold md:text-xl text-md p-4 ">{item.title}</h3>
          </Link>
        );
      })}
    </div>
  );
}
