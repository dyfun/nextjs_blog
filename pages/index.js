import { PostCard, Hero, Categories } from "../components/index";
import { getPosts } from "../services";

export default function Home({ posts }) {
  return (
    <>
      <Hero />
      <div className="dark:bg-gray-800 pb-16">
        <div className="container mx-auto w-11/12 md:w-7/12">
          <Categories />
          <div className="text-2xl font-bold pt-12 uppercase text-center tracking-widest">
            <span className="border-solid border-b-2 border-post-bg pb-5 dark:text-white dark:border-white">
              {"</>"}
            </span>
          </div>
          {posts
            ? posts.map((post) => {
                return <PostCard key={post.node.title} post={post}/>;
              })
            : "Yükleniyor..."}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
