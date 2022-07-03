import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export const Posts = () => {
  return (
    <>
      <h1>Posts</h1>
      <Link to="post">post</Link>
      <Outlet />
    </>
  );
};
