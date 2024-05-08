/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await knex('locations').del();

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
};
