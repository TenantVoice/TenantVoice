const knex = require('../knex');

class Post {
    constructor({ id, category, date, problem_duration, previously_reported, description, picture }) {
        this.id = id;
        this.category = category;
        this.date = date;
        this.problem_duration = problem_duration;
        this.previously_reported = previously_reported;
        this.description = description;
        this.picture = picture;
    }

    static async getAllPosts() {
        const query = `SELECT * FROM posts;`;
        const { rows } = await knex.raw(query);
        return rows;
    }

    static async getPostById(id) {
        const query = `SELECT * FROM post WHERE id = ?`;
        const { rows } = await knex.raw(query, [id]);
        return rows[0];
    }

    static async addPost(category, description, picture, reported_at = false) {
        const query = `INSERT INTO posts(category, description, previously_reported, picture) VALUES (?, ?, ?, ?);`;
        const { rows } = await knex.raw(query, [category, description, reported_at, picture]);
        console.log(rows[0]);
        return rows[0];
    }

    static async deletePost(id) {
        const query = `DELETE FROM post WHERE id = ?`;
        const { rows } = await knex.raw(query, [id]);
        return rows[0];
    }

    static async updateDescription(id, description) {
        const query = `UPDATE posts SET description=? WHERE id=?`;
        const { rows } = knex.raw(query, [id, description]);
        return rows[0];
    }
}

module.exports = Post;
