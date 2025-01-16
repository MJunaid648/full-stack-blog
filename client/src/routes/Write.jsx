import { useUser } from "@clerk/clerk-react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

const Write = () => {
  // const { isSignedIn, isLoaded } = useUser()
  // if (!isLoaded) return <div>Loading...</div>;
  // if (isLoaded && !isSignedIn) return <div>Sign in to write a post</div>;
  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-4">
      <h1 className="text-xl font-light">Create a New Post</h1>
      <form className="flex flex-col flex-1 gap-4 mb-2">
        <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">
          Add a cover image
        </button>
        <input
          className="text-2xl font-semibold bg-transparent outline-none"
          type="text"
          placeholder="My Awesome Story"
        />
        <div className="flex items-center gap-4">
          <label htmlFor="cat">Choose a category</label>
          <select name="cat" id="cat">
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="seo">SEO</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea
          placeholder="A Short Description"
          className="p-4 rounded-xl bg-white shadow-md"
        />
        <ReactQuill theme="snow" className="flex-1 rounded-xl bg-white" />
        <button className="bg-blue-800 text-white font-medium rounded-xl mt-4 mb-2 py-2 px-4 w-max ">
          Send
        </button>
      </form>
    </div>
  );
};

export default Write;
