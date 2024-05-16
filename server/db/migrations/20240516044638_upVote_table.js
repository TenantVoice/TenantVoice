/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('upvote', (table) => {
    table.increments();
    table.integer('amount').nullable();
    table.integer('user_id').unsigned();
    table
        .foreign('user_id')
        .references(`users.id`);
    table.integer('post_id').unsigned();
    table
        .foreign('post_id')
        .references('posts.id');

});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    knex.schema.dropTable('upvote')
};
