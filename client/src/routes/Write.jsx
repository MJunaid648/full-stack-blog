import { useAuth, useUser } from "@clerk/clerk-react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IKContext, IKUpload } from "imagekitio-react";

const authenticator = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/posts/upload-auth`
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }

    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

const Write = () => {
  const { isSignedIn, isLoaded } = useUser();
  const { getToken } = useAuth();
  const [postContent, setPostContent] = useState("");
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken();
      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: (res) => {
      toast.success("Post created successfully");
      navigate(`/${res.data.slug}`);
    },
  });

  if (!isLoaded) return <div>Loading...</div>;
  if (isLoaded && !isSignedIn) return <div>Sign in to write a post</div>;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      title: formData.get("title"),
      category: formData.get("category"),
      desc: formData.get("desc"),
      content: postContent,
    };

    mutation.mutate(data);
  };

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-4">
      <h1 className="text-xl font-light">Create a New Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col flex-1 gap-4 mb-2">
        {/* <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">
          Add a cover image
        </button> */}
        <IKContext
          publicKey={import.meta.env.VITE_IK_PUBLIC_KEY}
          urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
          authenticator={authenticator}
        >
          <IKUpload
            fileName="test-upload.png"
            // onError={onError}
            // onSuccess={onSuccess}
          />
        </IKContext>

        <input
          className="text-2xl font-semibold bg-transparent outline-none"
          type="text"
          placeholder="My Awesome Story"
          name="title"
          required
        />
        <div className="flex items-center gap-4">
          <label htmlFor="cat">Choose a category</label>
          <select name="category" id="cat">
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="seo">SEO</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea
          name="desc"
          placeholder="A Short Description"
          className="p-4 rounded-xl bg-white shadow-md"
          required
        />
        <div className="flex">
          <div className="flex flex-col gap-2">
            <div className="cursor-pointer">📷</div>
            <div className="cursor-pointer">▶️</div>
          </div>
          <ReactQuill
            theme="snow"
            className="flex-1 rounded-xl bg-white"
            value={postContent}
            onChange={setPostContent}
          />
        </div>
        <button
          disabled={mutation.isPending}
          className="bg-blue-800 text-white font-medium rounded-xl mt-4 mb-2 py-2 px-4 w-max disabled:bg-blue-400 disabled:cursor-not-allowed"
        >
          {mutation.isPending ? "Saving..." : "Save"}
        </button>
        {mutation.isError && (
          <span className="text-red-600">Error: {mutation.error.message}</span>
        )}
      </form>
    </div>
  );
};

export default Write;
