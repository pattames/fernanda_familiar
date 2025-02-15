import Tarjeta from "./components/Tarjeta";

export default async function Noticias() {
  //Test Loading
  // await new Promise((resolve) => setTimeout(resolve, 8000));

  const res = await fetch("https://fernandafamiliar.soy/wp-json/wp/v2/posts", {
    cache: "no-store",
  });
  const posts = await res.json();

  return (
    <div className="p-4 flex flex-wrap gap-4 justify-center fade-in">
      {posts && posts.map((post) => <Tarjeta post={post} key={post.id} />)}
    </div>
  );
}
