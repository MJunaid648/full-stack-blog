import User from "../models/user.model.js";

export const getUserSavedPosts = async (req, res) => {
  try {
    const clerkUserId = req.auth.userId;
    if (!clerkUserId) return res.status(401).json({ message: "Unauthorized" });

    const user = await User.findOne({ clerkUserId });

    return res.status(200).json(user.savedPosts);
  } catch (error) {
    console.log(error);
  }
};

export const savePost = async (req, res) => {
  try {
    const clerkUserId = req.auth.userId;
    const postId = req.body.postId;

    if (!clerkUserId) return res.status(401).json({ message: "Unauthorized" });

    const user = await User.findOne({ clerkUserId });
    const isSaved = user.savedPosts.some((post) => post == postId);

    if (!isSaved) {
      await User.findByIdAndUpdate(user._id, {
        $push: { savedPosts: postId },
      });
    } else {
      await User.findByIdAndUpdate(user._id, {
        $pull: { savedPosts: postId },
      });
    }

    return res
      .status(200)
      .json({ message: isSaved ? "Post removed" : "Post saved" });
  } catch (error) {
    console.log(error);
  }
};
