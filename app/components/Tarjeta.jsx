"use client";

import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import { sendGTMEvent } from "@next/third-parties/google";

export default function Tarjeta({ post }) {
  return (
    <Link
      href={`/${post.id}`}
      className="py-4 px-6 flex flex-wrap gap-2 flex-row-reverse border-2 max-w-5xl justify-center duration-200 hover:scale-105"
    >
      {post.jetpack_featured_media_url && (
        <Image
          src={post.jetpack_featured_media_url}
          width={500}
          height={500}
          alt="Imagen de la noticia"
          className="max-h-64 max-w-64 object-cover rounded-md"
          onClick={() => sendGTMEvent({ event: "buttonClicked", value: "xyz" })}
        />
      )}
      <div className="max-w-sm flex flex-col gap-2">
        <h1 className="text-2xl font-medium">
          {post.title.rendered && parse(post.title.rendered)}
        </h1>
        {post.excerpt.rendered && (
          <div className="text-lg">{parse(post.excerpt.rendered)}</div>
        )}
      </div>
    </Link>
  );
}
