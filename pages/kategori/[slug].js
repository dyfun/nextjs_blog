import React from "react";
import { getCategoryDetails, getCategories, getCategory } from "../../services";

const CatDetails = ({ posts, category }) => {
  return (
    <div className="dark:bg-gray-800 pb-16">
      <div className="container mx-auto w-11/12 md:w-7/12">
        <div className="text-2xl font-bold pt-12 uppercase text-center tracking-widest">
          <span className="border-solid border-b-2 border-post-bg pb-5 dark:text-white dark:border-white">
            {category ? category.map((cat) => cat.name) : "Yükleniyor...  "}
          </span>
        </div>
        {posts
          ? posts.map((post) => {
              return (
                <div className="mt-12 p-12 transition hover:shadow-xl hover:transition dark:bg-gray-700 overflow-hidden rounded">
                  <h3 className="font-bold uppercase text-2xl text-center dark:text-white">
                    {post.node.title}
                  </h3>
                  <div className="pt-6 text-md leading-8 text-post-text dark:text-white">
                    {post.node.excerpt}
                  </div>
                </div>
              );
            })
          : "Yükleniyor..."}
      </div>
    </div>
  );
};

export default CatDetails;

export async function getStaticProps({ params }) {
  const posts = (await getCategoryDetails(params.slug)) || [];
  const category = (await getCategory(params.slug)) || [];
  return {
    props: { posts, category },
  };
}

export async function getStaticPaths() {
  const cats = await getCategories();
  return {
    paths: cats.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
}
