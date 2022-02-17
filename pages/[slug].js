import React from "react";
import { getPosts, getPostDetails } from "../services";

const PostDetails = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };
  return (
    <>
      <div className="dark:bg-gray-800 pb-16">
        <div className="container mx-auto w-11/12 sm:w-7/12 ">
          <div className="text-xl font-bold pt-12 uppercase text-center tracking-widest md:text-2xl">
            <span className="border-solid border-b-2 border-post-bg dark:text-white dark:border-white">
              {post.title}
            </span>
          </div>
          <img className="mt-12 mx-auto w-7/12" />
          <div className="mt-4 p-12 shadow-xl sm:mt-6 dark:bg-gray-700">
            <div className="pt-6 text-md leading-8 text-post-text dark:text-white">
              {post.content.raw.children.map((object, i) => {
                const child = object.children.map((item, j) =>
                  getContentFragment(j, item.text)
                );
                return getContentFragment(i, child, object, object.type);
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetails;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: { post: data },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  };
}
