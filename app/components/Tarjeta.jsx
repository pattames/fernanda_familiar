"use client";

import Image from "next/image";
//Función que limpia contenido html:
import { limpiarHTML } from "../utils/limpiarHtml";

export default function Tarjeta({ post }) {
  return (
    <div className="py-4 px-6 flex flex-wrap gap-2 flex-row-reverse border-2 max-w-5xl justify-center duration-200 hover:scale-105">
      <Image
        src={post.jetpack_featured_media_url}
        width={500}
        height={500}
        alt="Imágen de la noticia"
        className="max-h-64 max-w-64 object-cover rounded-md"
      />
      <div className="max-w-sm">
        <h1 className="text-2xl font-medium">{post.title.rendered}</h1>
        <p className="text-lg">{limpiarHTML(post.excerpt.rendered)}</p>
      </div>
    </div>
  );
}
