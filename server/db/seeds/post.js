/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await knex('posts').del();

  // Inserts seed entries
  await knex('posts').insert([
    {
      category: 'Public Housing',
      created_at: knex.fn.now(),
      previously_reported: false,
      description: `Recognizing the need for increased accountability in public housing...`,
      picture: Buffer.from('default_placeholder', 'utf-8'), // Replace with your binary data
    },
    {
      category: 'Maintenance Issue',
      created_at: knex.fn.now(),
      previously_reported: true,
      description: `Persistent water leaks in several apartments...`,
      picture: Buffer.from('default_placeholder', 'utf-8'), // Replace with your binary data
    },
  ]);
};
