/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  // Before you have models you can always just do `await knex('table_name').del`
  await knex('posts').del();
  await knex('locations').del();
  await knex('users').del();

  await knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 1');
  await knex.raw('ALTER SEQUENCE posts_id_seq RESTART WITH 1');
  await knex.raw('ALTER SEQUENCE locations_id_seq RESTART WITH 1');


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

  await knex('locations').insert([
    {
      borough: "Brooklyn",
      neighborhood: "Canarsie",
      complex: "Bay View Houses",
      building: 4,
    },
    {
      borough: "Brooklyn",
      neighborhood: "Canarsie",
      complex: "Breukelen Houses",
      building: 17,
    },
    {
      borough: "Manhattan",
      neighborhood: "Upper West Side",
      complex: "Amsterdam Houses",
      building: 7,
    },
  ]);

  const result = await knex.raw('SELECT * FROM users')
  const users = result.rows

  await knex('posts').insert([
    {
      user_id: users[0].id,
      location_id: 1,
      category: 'Public Housing',
      created_at: knex.fn.now(),
      description: `Recognizing the need for increased accountability in public housing...`,
      picture: Buffer.from('default_placeholder', 'utf-8'), // Replace with your binary data
    },
    {
      user_id: users[0].id,
      location_id: 2,
      category: 'Maintenance Issue',
      created_at: knex.fn.now(),
      description: `Persistent water leaks in several apartments...`,
      picture: Buffer.from('default_placeholder', 'utf-8'), // Replace with your binary data
    },
  ]);
};
