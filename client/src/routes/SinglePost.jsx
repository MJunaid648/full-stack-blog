import { Link, useParams } from "react-router-dom";
import Image from "../components/Image";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { format } from "timeago.js";

const fetchPost = async (slug) => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/posts/${slug}`
    );
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const SinglePost = () => {
  const { slug } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchPost(slug),
  });

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Something went wrong!</div>;
  if (!data) return <div>Post not found!</div>;

  return (
    <div className="flex flex-col gap-8">
      {/* details */}
      <div className="flex gap-8 ">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:3xl xl:text-4xl 2xl:text-5xl font-semibold">
            {data.title}
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm ">
            <span>Written by</span>
            <Link
              className="text-blue-800"
              to={`/posts?author=${data.user.username}`}
            >
              {data.user.username}
            </Link>
            <span>on</span>
            <Link className="text-blue-800" to={`/posts?cat=${data.category}`}>
              {data.category}
            </Link>
            <span>{format(data.createdAt)}</span>
          </div>
          <p className="text-gray-500 font-medium">{data.desc}</p>
        </div>
        {data.img && (
          <div className="hidden lg:block w-2/5">
            <Image src={data.img} w="600" className="rounded-2xl" />
          </div>
        )}
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify ">
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-2 ">
          <h1 className="mb-2 text-sm font-medium ">Author</h1>
          <div className="flex items-center gap-4 ">
            {data.user.userImg && (
              <Image src={data.user.img} w="50" className="rounded-full" />
            )}
            <Link
              className="text-blue-800"
              to={`/posts?author=${data.user.username}`}
            >
              {" "}
              {data.user.username}
            </Link>
          </div>
          <p className="my-4 text-gray-500 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <div className="flex gap-2">
            <Link>
              <Image src="facebook.svg" />
            </Link>
            <Link>
              <Image src="instagram.svg" />
            </Link>
          </div>
          <PostMenuActions post={data} />
          <h1 className="my-2 text-sm font-medium ">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline" to={`/posts`}>All</Link>
            <Link className="underline" to={`/posts?cat=web-design`}>Web Design</Link>
            <Link className="underline" to={`/posts?cat=development`}>Development</Link>
            <Link className="underline" to={`/posts?cat=databases`}>Databases</Link>
            <Link className="underline" to={`/posts?cat=seo`}>Search Engines</Link>
            <Link className="underline" to={`/posts?cat=marketing`}>Marketing</Link>
          </div>
          <h1 className="my-2 text-sm font-medium ">Search</h1>
          <Search />
        </div>
      </div>
      <Comments postId={data?._id} />
    </div>
  );
};

export default SinglePost;
