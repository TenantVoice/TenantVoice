const Comment = require('../db/models/comment')

exports.addComment = async (req, res) => {
    const { comment, user_id, post_id } = req.body;

    if (!user_id) return res.sendStatus(400);
    const newComment = await Comment.addComment(comment, user_id, post_id);


    res.send(newComment);
}

exports.getAllCommentsByPostId = async (req, res) => {
    const { id } = req.params;
    const comments = await Comment.getAllCommentByPostId(id)

    res.send(comments);
}