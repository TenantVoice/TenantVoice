/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('comments', (table) => {
    table.increments();
    table.string('comment').notNullable();
    table.integer('user_id').unsigned().notNullable();
    table.integer('post_id').unsigned().notNullable();
    table
        .foreign('user_id')
        .references('id')
        .inTable('users')
        .onDelete('CASCADE');
    table
        .foreign('post_id')
        .references('id')
        .inTable('posts')
        .onDelete('CASCADE');
    table.timestamps(true, true);
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = (knex) => knex.schema.dropTable('comments');

