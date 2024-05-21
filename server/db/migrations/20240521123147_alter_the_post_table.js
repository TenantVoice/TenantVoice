/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
    await knex.transaction(async (trx) => {
        const hasProblemDurationColumn = await knex.schema.hasColumn('posts', 'problem_duration');
        const hasPreviouslyReportedColumn = await knex.schema.hasColumn('posts', 'previously_reported');

        if (!hasProblemDurationColumn) {
            await trx.schema.table('posts', (table) => {
                table.string('problem_duration').nullable();
            });
        } else {
            await trx.schema.alterTable('posts', (table) => {
                table.string('problem_duration').nullable().alter();
            });
        }

        if (!hasPreviouslyReportedColumn) {
            await trx.schema.table('posts', (table) => {
                table.string('previously_reported');
            });
        } else {
            await trx.schema.alterTable('posts', (table) => {
                table.string('previously_reported').nullable().alter();
            });
        }
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
    await knex.transaction(async (trx) => {
        const hasProblemDurationColumn = await knex.schema.hasColumn('posts', 'problem_duration');
        const hasPreviouslyReportedColumn = await knex.schema.hasColumn('posts', 'previously_reported');

        if (hasProblemDurationColumn) {
            await trx.schema.alterTable('posts', (table) => {
                table.string('problem_duration').nullable().alter();
            });
        }

        if (hasPreviouslyReportedColumn) {
            await trx.schema.alterTable('posts', (table) => {
                table.string('previously_reported').nullable().alter();
            });
        }
    });
};
