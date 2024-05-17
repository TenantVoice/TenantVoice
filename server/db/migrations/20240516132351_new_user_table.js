/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
    const hasLocation = await knex.schema.hasColumn('users', 'location');
    const hasPicture = await knex.schema.hasColumn('users', 'picture');

    await knex.schema.alterTable('users', (table) => {
        if (!hasLocation) {
            table.string('location');
        }
        if (!hasPicture) {
            table.string('picture');
        }
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = (knex) => knex.schema.alterTable('users', (table) => {
    table.dropColumn('location');
    table.dropColumn('picture');
});

