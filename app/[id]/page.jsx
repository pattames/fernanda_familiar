import Image from "next/image";
import parse from "html-react-parser";

export default async function Noticia({ params }) {
  const res = await fetch("https://fernandafamiliar.soy/wp-json/wp/v2/posts");
  const posts = await res.json();

  //Encontrar noticia seleccionada
  const post = posts.find((post) => post.id === Number(params.id));

  return (
    <div className="max-w-7xl flex flex-col mx-auto p-6 gap-4">
      <h1 className="text-4xl font-semibold">{post.title.rendered}</h1>
      <Image
        src={post.jetpack_featured_media_url}
        height={500}
        width={500}
        alt="Imagen de la noticia"
      />
      <div>
        <h2>Por: </h2>
        <h2>Fecha</h2>
      </div>
      <p className="text-lg">{parse(post.content.rendered)}</p>
    </div>
  );
}
