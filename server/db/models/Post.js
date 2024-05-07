const knex = require('../knex');
const authUtils = require('../../utils/auth-utils');
const { query } = require('express');

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

    static getAllPosts() {
        const query = `SELECT * FROM posts`
        const { rows } = knex.raw(query)

        return rows;
    }
}