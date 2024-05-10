/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.alterTable('posts', (table) => {
    table.integer('user_id').unsigned();
    table
        .foreign('user_id')
        .references(`users.id`);
    table.integer('location_id').unsigned();
    table
        .foreign('location_id')
        .references('locations.id');
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.alterTable('posts', (table) => {
    table.dropColumn('user_id');
    table.dropColumn('location_id');
});
