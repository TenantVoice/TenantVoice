/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('locations', (table) => {
  table.increments();
  table.string('borough').notNullable();
  table.string('neighborhood').notNullable();
  table.string('complex').notNullable();
  table.integer('building').notNullable();
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('locations');
