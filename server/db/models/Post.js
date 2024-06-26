const knex = require('../knex');

class Post {
  constructor({ category, date, problem_duration, previously_reported, description, picture }) {
    this.category = category;
    this.date = date;
    this.problem_duration = problem_duration;
    this.previously_reported = previously_reported;
    this.description = description;
    this.picture = picture;
  }

  static async getAllPosts() {
    const query = `SELECT posts.*, users.username, users.picture AS user_picture, locations.borough
    FROM posts
    JOIN users ON posts.user_id = users.id
    JOIN locations on posts.location_id = locations.id`;
    const { rows } = await knex.raw(query);
    return rows;
  }

  static async getPostById(id) {
    const query = `
    SELECT posts.*, users.username
    FROM posts
    JOIN users ON posts.user_id = users.id
    WHERE posts.id = ?`;
    const { rows } = await knex.raw(query, [id]);
    return rows[0];
  }

  static async addPost(category, description, picture = 'default_placeholder', user_id, location_id = 1, problem_duration) {
    console.log(category, description, picture, location_id, user_id, problem_duration);
    const query = `INSERT INTO posts(category, description, picture, user_id, location_id, problem_duration) VALUES (?, ?, ?, ?, ?, ?);`
    const { rows } = await knex.raw(query, [category, description, picture, user_id, location_id, problem_duration]);
    return rows[0];
  }

  static async deletePost(id) {
    const query = `DELETE FROM post WHERE id = ?`;
    const { rows } = await knex.raw(query, [id]);
    return rows[0];
  }

  static async getAllCommentByPostId(id) {
    const query = `
    SELECT comment.*, users.username
    FROM comment
    JOIN users ON comment.user_id = users.id
    WHERE comment.post_id = ?`;
    const { rows } = await knex.raw(query, [id]);
    return rows;
  }

  static async updateDescription(id, description) {
    const query = `UPDATE posts SET description=? WHERE id=?`;
    const { rows } = await knex.raw(query, [id, description]);
    return rows[0];
  }
}

module.exports = Post;
