import Image from "next/image";
import parse from "html-react-parser";

export default async function Noticia({ params }) {
  //Fetch posts
  const res = await fetch("https://fernandafamiliar.soy/wp-json/wp/v2/posts", {
    cache: "no-store",
  });
  const posts = await res.json();

  //Encontrar noticia seleccionada
  const post = posts.find((post) => post.id === Number(params.id));

  //Fetch author
  const res2 = await fetch(
    `https://fernandafamiliar.soy/wp-json/wp/v2/users/${post.author}`,
    {
      cache: "no-store",
    }
  );
  const author = await res2.json();

  //Nuevo formato de fecha
  const year = post.date.substring(0, 4);
  const month = post.date.substring(5, 7);
  const day = post.date.substring(8, 10);
  const newDate = day + "-" + month + "-" + year;

  return (
    <div className="max-w-7xl flex flex-col mx-auto py-10 px-6 gap-8 border-2 fade-in">
      <h1 className="text-4xl font-semibold text-center">
        {post.title.rendered && post.title.rendered}
      </h1>
      {post.jetpack_featured_media_url && (
        <Image
          src={post.jetpack_featured_media_url}
          height={600}
          width={600}
          alt="Imagen de la noticia"
          className="mx-auto rounded-full shadow-xl shadow-slate-400"
        />
      )}
      <div className="text-center">
        <h2>
          Por <span className="font-bold">{author.name && author.name}</span>
        </h2>
        <h2>{post.date && newDate}</h2>
      </div>
      {post.content.rendered && (
        <div className="text-lg font-serif">{parse(post.content.rendered)}</div>
      )}
    </div>
  );
}
