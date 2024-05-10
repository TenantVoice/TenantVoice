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

exports.createPost = async (req, res) => {
  const { id, category, date, problem_duration,
    previously_reported, description, picture } = req.body;

  const post = Post.addPost(
    id,
    category,
    date,
    problem_duration,
    previously_reported,
    description,
    picture,
  );
  res.send(post);
};

// trying to fixvv 
exports.updateDescription = async (req, res) => {
  const { id } = req.params;
  const { description } = req.body;

  const post = Post.updateDescription(
    description
  );
  res.send(post);

}

exports.deletePost = async (req, res) => {
  const { id } = req.params;
  const { category, date, problem_duration,
    previously_reported, description, picture } = req.body;

  const post = Post.deletePost(
    description
  );
  res.send(post);

}

