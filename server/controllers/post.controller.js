import ImageKit from "imagekit";
import Post from "../models/post.model.js";
import User from "../models/user.model.js";

export const getPosts = async (req, res) => {
  const posts = await Post.find();
  res.status(200).json(posts);
};

export const getSinglePost = async (req, res) => {
  const post = await Post.findOne({ slug: req.params.slug });
  res.status(200).json(post);
};

export const createPost = async (req, res) => {
  const clerkUserId = req.auth.userId;

  if (!clerkUserId) {
    return res.status(401).json({ message: "Unauthorized!" });
  }

  const user = await User.findOne({ clerkUserId });

  if (!user) {
    return res.status(404).json({ message: "User not found!" });
  }

  let baseSlug = req.body.title.replace(/ /g, "-").toLowerCase();
  let slug = baseSlug;
  let existingPost = await Post.findOne({ slug });
  let counter = 2;

  // Ensure unique slug
  while (existingPost) {
    slug = `${baseSlug}-${counter}`;
    existingPost = await Post.findOne({ slug });
    counter++;
  }

  const newPost = new Post({ user: user._id, slug, ...req.body });

  const post = await newPost.save();
  res.status(201).json(post);
};

export const deletePost = async (req, res) => {
  const clerkUserId = req.auth.userId;

  if (!clerkUserId) {
    return res.status(401).json({ message: "Unauthorized!" });
  }

  const user = await User.findOne(clerkUserId);

  const deletedPost = await Post.findOneAndDelete({
    _id: req.params.id,
    user: user._id,
  });

  if (!deletePost)
    return res
      .status(403)
      .json({ message: "You can only delete your own posts!" });

  res.status(201).json({ message: "Post has been deleted" });
};

const imageKit = new ImageKit({
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

export const uploadAuth = async (req, res) => {
  const result = imageKit.getAuthenticationParameters();
  res.send(result);
};
