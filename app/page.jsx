import Tarjeta from "./components/Tarjeta";

export default async function Noticias() {
  const res = await fetch("https://fernandafamiliar.soy/wp-json/wp/v2/posts");
  const posts = await res.json();

  return (
    <div className="p-4 flex flex-wrap gap-4 justify-center bottom-in">
      {posts && posts.map((post) => <Tarjeta post={post} key={post.id} />)}
    </div>
  );
}
