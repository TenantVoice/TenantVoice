const knex = require('knex');

class Comment {

    static async addComment(comment, user_id, post_id) {
        const query = `
        INSERT INTO comments(comment, user_id, post_id) VALUES(?, ?, ?)
        `
        const { rows } = await knex.raw(query, [comment, user_id, post_id]);
        return rows[0];
    }
}