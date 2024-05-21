const Post = require("../db/models/Post");

exports.getAllPosts = async (req, res) => {
  const posts = await Post.getAllPosts();
  res.send(posts);
};

exports.getPostById = async (req, res) => {
  const { id } = req.params;
  const post = Post.getPostById(id);

  if (!post) res.sendStatus(404);
  res.send(post);
};
// changed this to addPost in order to match model method
exports.addPost = async (req, res) => {
  const { category, description, picture, user_id, location_id, problem_duration } = req.body;

  if (!user_id) res.sendStatus(400);

  const post = Post.addPost(
    category,
    description,
    picture,
    user_id,
    location_id,
    problem_duration
  );

  res.send(post);
};

exports.updateDescription = async (req, res) => {
  const { id } = req.params;
  const { description } = req.body;
  const post = Post.updateDescription(
    id,
    description
  );
  res.send(post);
}

exports.deletePost = async (req, res) => {
  const { id } = req.body;
  const post = Post.deletePost(
    id
  );
  res.send(post);
}

exports.getPost = async (req, res) => {
  const { id } = req.params;
  const post = Post.getPostById(
    id
  );
  res.send(post);
}