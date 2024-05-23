const knex = require('../knex');

class Comment {

    static async addComment(comment, user_id = 2, post_id) {
        console.log(comment, user_id, post_id)
        const query = `
        INSERT INTO comments(comment, user_id, post_id) VALUES(?, ?, ?)
        RETURNING *
        `
        const { rows } = await knex.raw(query, [comment, user_id, post_id]);

        return rows[0];
    }

    static async getAllCommentByPostId(post_id) {
        const query = `
        SELECT comments.*, users.username, users.picture
        FROM comments
        JOIN users ON comments.user_id = users.id
        WHERE comments.post_id = ?
        `;
        const { rows } = await knex.raw(query, [post_id]);
        return rows;
    }
}

module.exports = Comment;