import axios from "axios";
import SingleComment from "./SingleComment";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuth, useUser } from "@clerk/clerk-react";
import { toast } from "react-toastify";

const fetchComments = async (postId) => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/comments/${postId}`
    );
    // console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const Comments = ({ postId }) => {
  const { user } = useUser();
  const { getToken } = useAuth();
  const { isPending, error, data } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => fetchComments(postId),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (newComment) => {
      const token = await getToken();
      return axios.post(
        `${import.meta.env.VITE_API_URL}/comments/${postId}`,
        newComment,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["comments", postId]);
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Something went wrong!</div>;
  if (!data) return <div>Comments not found!</div>;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      desc: formData.get("desc"),
    };

    mutation.mutate(data);
  };
  return (
    <div className="flex flex-col gap-4 lg:w-3/5 mb-12 ">
      <h1 className="text-xl text-gray-500 underline ">Comments</h1>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-between gap-8 w-full"
      >
        <textarea
          name="desc"
          placeholder="write a comment..."
          className="w-full p-4 rounded-xl"
        />
        <button
          className="bg-blue-800 px-4 py-3 text-white font-medium rounded-xl "
          type="submit"
        >
          Send{" "}
        </button>
      </form>
      {isPending ? (
        "Loading.."
      ) : error ? (
        "Error loading comments!"
      ) : (
        <>
          {mutation.isPending && (
            <SingleComment
              comment={{
                desc: `${mutation.variables.desc}`,
                createdAt: new Date(),
                user: {
                  img: user.imageUrl,
                  username: user.username,
                },
              }}
              postId={postId}
            />
          )}
        </>
      )}
      {data.map((comment) => (
        <SingleComment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
