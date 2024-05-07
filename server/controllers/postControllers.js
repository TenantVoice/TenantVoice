const Post = require("../db/models/Post");

exports.getAllPosts = async (req, res) => {
    const posts = await Post.getAllPosts();
    res.send(posts);
}

exports.getPostById = async (req, res) => {
    const { id } = req.params;
    const post = Post.getPostById(id);

    if (!post) res.sendStatus(404);
    res.send(post)
}

exports.createPost = async (req, res) => {
    const { id, category, date, problem_duration, previously_reported, description, picture } = req.body;

    const post = Post.createPost()
}