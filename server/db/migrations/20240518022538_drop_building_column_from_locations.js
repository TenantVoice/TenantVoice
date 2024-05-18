/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
    const hasBuildingNumber = await knex.schema.hasColumn('locations', 'building');
    if (hasBuildingNumber) {
        await knex.schema.alterTable('locations', (table) => {
            table.dropColumn('building');
        });
    }
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
    const hasBuildingNumber = await knex.schema.hasColumn('locations', 'building');
    if (!hasBuildingNumber) {
        await knex.schema.alterTable('locations', (table) => {
            table.string('building').notNullable();
        });
    }
};
