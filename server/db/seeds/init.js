/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  // Before you have models you can always just do `await knex('table_name').del`
  await knex('users').del();

  await knex('users').insert([
    {
      full_name: 'Linden Salm',
      username: 'floraleopard',
      password_hash: '473892',
      email: 'floraleopard@gmail.com',
    },
    {
      full_name: 'Mohamad Eastwood',
      username: 'chaospider',
      password_hash: '58028289',
      email: 'chaospider@gmail.com',
    },
    {
      full_name: 'Hana Kwok',
      username: 'wheatglacier',
      password_hash: '8908930',
      email: 'wheatglacier@gmail.com',
    },
  ]);
};
