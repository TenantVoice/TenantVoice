const knex = require('../knex');

class Comment {

    static async addComment(comment, user_id = 2, post_id) {
        console.log(comment, user_id, post_id)
        const query = `
        INSERT INTO comments(comment, user_id, post_id) VALUES(?, ?, ?)
        `
        const { rows } = await knex.raw(query, [comment, user_id, post_id]);

        return rows[0];
    }

    static async getAllCommentByPostId(id) {
        const query = `SELECT * FROM comments WHERE post_id=?`
        const { rows } = await knex.raw(query, [id])

        return rows;
    }
}

module.exports = Comment;