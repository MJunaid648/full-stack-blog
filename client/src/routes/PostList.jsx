import InfiniteScroll from "react-infinite-scroll-component";
import PostListItem from "../components/PostListItem";
import SideMenu from "../components/SideMenu";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useState } from "react";
import axios from "axios";

const fetchPosts = async (params) => {

  try {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`, {
      params: { page: params.pageParam, limit: 2 },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const PostList = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: (pageParam = 1) => fetchPosts(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      return lastPage.hasMore ? pages.length + 1 : undefined;
    },
  });

  if (status === "loading") return <div>Loading...</div>;
  if (status === "error") return <div>"Something went wrong!"</div>;

  const allPosts = data?.pages?.flatMap((page) => page.posts) || [];

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
        <InfiniteScroll
        dataLength={allPosts.length}
        next={fetchNextPage}
        hasMore={!!hasNextPage}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {allPosts.map((post) => (
          <PostListItem key={post._id} post={post} />
        ))}{" "}
      </InfiniteScroll>
        </div>
        <div className={`${open ? "block" : "hidden"} md:block`}>
          <SideMenu />
        </div>
      </div>

     
    </div>
  );
};

export default PostList;
