import { useState } from "react";
import PostListItem from "../components/PostListItem";
import SideMenu from "../components/SideMenu";

const PostList = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <h1 className="mb-8 text-2xl">Development Blog</h1>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="md:hidden mb-4 bg-blue-800 text-sm text-white px-4 py-2 rounded-2xl"
      >
        {open ? "Close" : "Filter or Search"}
      </button>
      <div className="flex flex-col-reverse gap-8 md:flex-row ">
        <div className="flex flex-col gap-8">
          <PostListItem />
          <PostListItem />
          <PostListItem />
          <PostListItem />
          <PostListItem />
        </div>
        <div className={`${open ? "block" : "hidden"} md:block`}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default PostList;
