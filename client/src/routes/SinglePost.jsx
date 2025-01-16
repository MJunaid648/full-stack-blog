import { Link } from "react-router-dom";
import Image from "../components/Image";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";
const SinglePost = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* details */}
      <div className="flex gap-8 ">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
            est corporis animi?
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm ">
            <span>Written by</span>
            <Link className="text-blue-800">John Doe</Link>
            <span>on</span>
            <Link className="text-blue-800">Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
            ducimus assumenda nobis ratione minima dolore minus repellendus
            consectetur odio, nam sapiente possimus neque ipsam ut quo ipsum
            enim nihil veritatis eligendi voluptates? Molestias, natus.
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src="postImg.jpeg" w="600" className="rounded-2xl" />
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam amet
            totam corrupti dicta corporis. Nemo molestias fuga perferendis
            eligendi ex hic, repellendus animi dolores. Illum, commodi! Commodi
            rem veritatis porro, sunt, optio non nulla totam reiciendis eligendi
            veniam impedit quasi quae accusamus quidem maiores soluta maxime
            inventore! Harum, asperiores dolorum. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Veniam amet totam corrupti dicta
            corporis. Nemo molestias fuga perferendis eligendi ex hic,
            repellendus animi dolores. Illum, commodi! Commodi rem veritatis
            porro, sunt, optio non nulla totam reiciendis eligendi veniam
            impedit quasi quae accusamus quidem maiores soluta maxime inventore!
            Harum, asperiores dolorum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam amet
            totam corrupti dicta corporis. Nemo molestias fuga perferendis
            eligendi ex hic, repellendus animi dolores. Illum, commodi! Commodi
            rem veritatis porro, sunt, optio non nulla totam reiciendis eligendi
            veniam impedit quasi quae accusamus quidem maiores soluta maxime
            inventore! Harum, asperiores dolorum. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Veniam amet totam corrupti dicta
            corporis. Nemo molestias fuga perferendis eligendi ex hic,
            repellendus animi dolores. Illum, commodi! Commodi rem veritatis
            porro, sunt, optio non nulla totam reiciendis eligendi veniam
            impedit quasi quae accusamus quidem maiores soluta maxime inventore!
            Harum, asperiores dolorum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam amet
            totam corrupti dicta corporis. Nemo molestias fuga perferendis
            eligendi ex hic, repellendus animi dolores. Illum, commodi! Commodi
            rem veritatis porro, sunt, optio non nulla totam reiciendis eligendi
            veniam impedit quasi quae accusamus quidem maiores soluta maxime
            inventore! Harum, asperiores dolorum. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Veniam amet totam corrupti dicta
            corporis. Nemo molestias fuga perferendis eligendi ex hic,
            repellendus animi dolores. Illum, commodi! Commodi rem veritatis
            porro, sunt, optio non nulla totam reiciendis eligendi veniam
            impedit quasi quae accusamus quidem maiores soluta maxime inventore!
            Harum, asperiores dolorum.
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam amet
            totam corrupti dicta corporis. Nemo molestias fuga perferendis
            eligendi ex hic, repellendus animi dolores. Illum, commodi! Commodi
            rem veritatis porro, sunt, optio non nulla totam reiciendis eligendi
            veniam impedit quasi quae accusamus quidem maiores soluta maxime
            inventore! Harum, asperiores dolorum. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Veniam amet totam corrupti dicta
            corporis. Nemo molestias fuga perferendis eligendi ex hic,
            repellendus animi dolores. Illum, commodi! Commodi rem veritatis
            porro, sunt, optio non nulla totam reiciendis eligendi veniam
            impedit quasi quae accusamus quidem maiores soluta maxime inventore!
            Harum, asperiores dolorum.
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam amet
            totam corrupti dicta corporis. Nemo molestias fuga perferendis
            eligendi ex hic, repellendus animi dolores. Illum, commodi! Commodi
            rem veritatis porro, sunt, optio non nulla totam reiciendis eligendi
            veniam impedit quasi quae accusamus quidem maiores soluta maxime
            inventore! Harum, asperiores dolorum. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Veniam amet totam corrupti dicta
            corporis. Nemo molestias fuga perferendis eligendi ex hic,
            repellendus animi dolores. Illum, commodi! Commodi rem veritatis
            porro, sunt, optio non nulla totam reiciendis eligendi veniam
            impedit quasi quae accusamus quidem maiores soluta maxime inventore!
            Harum, asperiores dolorum.
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam amet
            totam corrupti dicta corporis. Nemo molestias fuga perferendis
            eligendi ex hic, repellendus animi dolores. Illum, commodi! Commodi
            rem veritatis porro, sunt, optio non nulla totam reiciendis eligendi
            veniam impedit quasi quae accusamus quidem maiores soluta maxime
            inventore! Harum, asperiores dolorum. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Veniam amet totam corrupti dicta
            corporis. Nemo molestias fuga perferendis eligendi ex hic,
            repellendus animi dolores. Illum, commodi! Commodi rem veritatis
            porro, sunt, optio non nulla totam reiciendis eligendi veniam
            impedit quasi quae accusamus quidem maiores soluta maxime inventore!
            Harum, asperiores dolorum.
          </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-2 ">
          <h1 className="mb-2 text-sm font-medium ">Author</h1>
          <div className="flex items-center gap-4 ">
            <Image
              src="userImg.jpeg"
              className="w-12 h-12 rounded-full object-cover"
              w="48"
              h="48"
            />
            <Link className="text-blue-800">John Doe</Link>
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
          <PostMenuActions />
          <h1 className="my-2 text-sm font-medium ">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline ">All</Link>
            <Link className="underline ">Web Design</Link>
            <Link className="underline ">Development</Link>
            <Link className="underline ">Databases</Link>
            <Link className="underline ">Search Engines</Link>
            <Link className="underline ">Marketing</Link>
          </div>
          <h1 className="my-2 text-sm font-medium ">Search</h1>
          <Search />
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default SinglePost;
