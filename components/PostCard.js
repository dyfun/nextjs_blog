import React from "react";
import moment from "moment";
import Link from "next/link";

const PostCard = ({ post}) => {
  return (
    <div
      className="mt-12 p-12 transition hover:shadow-xl hover:transition dark:bg-gray-700 overflow-hidden rounded"
    >
      <a href={post.node.slug}>
        <h3 className="font-bold uppercase text-2xl text-center dark:text-white">
          {post.node.title}
        </h3>
        <div className="pt-6 text-md leading-8 text-post-text dark:text-white">
          {post.node.excerpt}
        </div>
      </a>
    </div>
  );
};

export default PostCard;
