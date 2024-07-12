import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";

export default function Tarjeta({ post }) {
  return (
    <Link
      href={`/${post.id}`}
      className="py-4 px-6 flex flex-wrap gap-2 flex-row-reverse border-2 max-w-5xl justify-center duration-200 hover:scale-105"
    >
      <Image
        src={post.jetpack_featured_media_url}
        width={500}
        height={500}
        alt="Imagen de la noticia"
        className="max-h-64 max-w-64 object-cover rounded-md"
      />
      <div className="max-w-sm flex flex-col gap-2">
        <h1 className="text-2xl font-medium">{post.title.rendered}</h1>
        <p className="text-lg">{parse(post.excerpt.rendered)}</p>
      </div>
    </Link>
  );
}
