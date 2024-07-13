import Tarjeta from "./components/Tarjeta";

export default async function Noticias() {
  try {
    const res = await fetch(
      "https://fernandafamiliar.soy/wp-json/wp/v2/posts",
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    const posts = await res.json();

    return (
      <div className="p-4 flex flex-wrap gap-4 justify-center bottom-in">
        {posts && posts.map((post) => <Tarjeta post={post} key={post.id} />)}
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return <div>Error loading posts. Please try again later.</div>;
  }
}
