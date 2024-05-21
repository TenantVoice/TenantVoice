const Comment = require('../db/models/comment')

exports.addComment = async (req, res) => {
    const { comment, user_id, post_id } = req.body;
    const newComment = await Comment.addComment(comment, user_id, post_id);

    if (!user_id) res.sendStatus(400);

    res.send(newComment);
}