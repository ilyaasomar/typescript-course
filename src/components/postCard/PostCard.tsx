import { PostProps } from "@/types/type";
import React from "react";

const PostCard = ({ title, body }: PostProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default PostCard;
