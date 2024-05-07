/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
    return knex.schema.alterTable('users', (table) => {
        table.dropColumn('created_at');
        table.dropColumn('updated_at');
        table.string('full_name').notNullable();
        table.string('email').notNullable().unique();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
    return knex.schema.alterTable('users', (table) => {
        table.timestamps(true, true);
        table.dropColumn('full_name');
        table.dropColumn('email');
    })
}
