import React from "react";
import PostCard from "../postCard/PostCard";
import { PostProps } from "@/types/type";

// get data from jsonplaceholder
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failled to fetch data");
  }
  return res.json();
}
const PostList = async () => {
  const data: PostProps[] = await getData();
  return (
    <div className="postList">
      {/* <PostCard title="post title" desc="post description" /> */}
      {data.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export default PostList;
