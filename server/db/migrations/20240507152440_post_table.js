/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('posts', (table) => {
        table.increments();
        table.string('category').notNullable();
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.boolean('previously_reported').notNullable();
        table.string('description').notNullable();
        table.binary('picture').notNullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = (knex) => knex.schema.dropTable('posts');
