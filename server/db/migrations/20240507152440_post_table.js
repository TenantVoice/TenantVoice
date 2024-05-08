/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('posts', (table) => {
  table.increments();
  table.string('category').notNullable();
  table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
  table.boolean('previously_reported').notNullable();
  table.text('description').notNullable();
  table.binary('picture').defaultTo('default_image');
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = (knex) => knex.schema.dropTable('posts');
