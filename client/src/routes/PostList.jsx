import { useState } from "react";
import PostListItem from "../components/PostListItem";
import SideMenu from "../components/SideMenu";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const PostList = () => {
  const [open, setOpen] = useState(false);
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => fetchPosts(),
  });

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log(data);

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
