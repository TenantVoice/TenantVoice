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
    {
      full_name: "John Doe",
      username: "johndoe123",
      password_hash: "123456",
      email: "johndoe@example.com"
    },
    {
      full_name: "Jane Smith",
      username: "janesmith456",
      password_hash: "654321",
      email: "janesmith@example.com"
    },
    {
      full_name: "Alice Johnson",
      username: "alicej",
      password_hash: "abcdefgh",
      email: "alice@example.com"
    },
    {
      full_name: "Bob Brown",
      username: "bobbrown789",
      password_hash: "ijklmnop",
      email: "bob@example.com"
    },
    {
      full_name: "Emma Davis",
      username: "emmad",
      password_hash: "qrstuvwxyz",
      email: "emma@example.com"
    },
    {
      full_name: "James Wilson",
      username: "jamesw",
      password_hash: "123abc456def",
      email: "james@example.com"
    },
    {
      full_name: "Sarah Lee",
      username: "sarahlee",
      password_hash: "789xyz123",
      email: "sarah@example.com"
    },
    {
      full_name: "Michael Taylor",
      username: "michaelt",
      password_hash: "456uvw789",
      email: "michael@example.com"
    },
    {
      full_name: "Olivia Anderson",
      username: "oliviaa",
      password_hash: "lmnopqrs789",
      email: "olivia@example.com"
    },
    {
      full_name: "David Martinez",
      username: "davidm",
      password_hash: "tuvwxyz123",
      email: "david@example.com"
    },
    {
      full_name: "Sophia White",
      username: "sophiaw",
      password_hash: "abcd9876efgh",
      email: "sophia@example.com"
    },
    {
      full_name: "William Brown",
      username: "williamb",
      password_hash: "1234ijkl5678",
      email: "william@example.com"
    },
    {
      full_name: "Emily Miller",
      username: "emilym",
      password_hash: "mnopqrst1234",
      email: "emily@example.com"
    },
    {
      full_name: "Daniel Thompson",
      username: "danield",
      password_hash: "uvwxyz5678abcd",
      email: "daniel@example.com"
    },
    {
      full_name: "Grace Johnson",
      username: "gracey",
      password_hash: "ghijkl123",
      email: "grace@example.com"
    },
    {
      full_name: "Benjamin Parker",
      username: "benp",
      password_hash: "6789abcd1234",
      email: "benjamin@example.com"
    },
    {
      full_name: "Ava Wilson",
      username: "avaw",
      password_hash: "efgh5678ijkl",
      email: "ava@example.com"
    }


  ]);


  await knex('locations').insert([
    {
      borough: "Brooklyn",
      neighborhood: "Canarsie",
      complex: "Bay View Houses",
    },
    {
      borough: "Brooklyn",
      neighborhood: "Canarsie",
      complex: "Breukelen Houses",
    },
    {
      borough: "Brooklyn",
      neighborhood: "Bedford Stuyvesant",
      complex: "Breevort Houses",
    },
    {
      borough: "Manhattan",
      neighborhood: "Upper West Side",
      complex: "Amsterdam Addition",
    },
    {
      borough: "Manhattan",
      neighborhood: "Upper West Side",
      complex: "Amsterdam Houses",
    },
    {
      borough: "Manhattan",
      neighborhood: "Lower East Side",
      complex: "Alfred E.Smith Houses",
    },
    {
      borough: "Bronx",
      neighborhood: "Soundview",
      complex: "Bronx River Addition",
    },
    {
      borough: "Bronx",
      neighborhood: "Soundview",
      complex: "Bronx River Houses",
    },
    {
      borough: "Bronx",
      neighborhood: "Soundview",
      complex: "Clason Point Gardens",
    },
    {
      borough: "Queens",
      neighborhood: "South Jamaica",
      complex: "Baisley Park Houses",
    },
    {
      borough: "Queens",
      neighborhood: "Forest Hills",
      complex: "Forest Hills Co - op Houses",
    },
    {
      borough: "Queens",
      neighborhood: "Long Island City",
      complex: "Ravenswood Houses",
    },
    {
      borough: "Staten Island",
      neighborhood: "Dongan Hills",
      complex: "Berry Houses",
    },
    {
      borough: "Staten Island",
      neighborhood: "Mariners Harbor",
      complex: "Mariners Harbor Houses",
    },
    {
      borough: "Staten Island",
      neighborhood: "Stapleton",
      complex: "Stapleton Houses",
    },
  ]);


  const result = await knex.raw('SELECT * FROM users')
  const users = result.rows


  await knex('posts').insert([
    {
      "user_id": 3,
      "location_id": 3,
      "category": "structural damage",
      "created_at": "2024-05-15T12:00:00Z",
      "description": "There's a crack in the wall of my living room",
      "picture": "crack.png"
    },
    {
      "user_id": 6,
      "location_id": 6,
      "category": "electrical issue",
      "created_at": "2024-05-15T12:00:00Z",
      "description": "There's a short circuit in the living room",
      "picture": "short_circuit.png"
    },
    {
      "user_id": 4,
      "location_id": 4,
      "category": "plumbing issue",
      "created_at": "2024-05-15T12:00:00Z",
      "description": "Water is leaking from the bathroom sink",
      "picture": "leak.png"
    },
    {
      "user_id": 5,
      "location_id": 5,
      "category": "pest problem",
      "created_at": "2024-05-15T12:00:00Z",
      "description": "My apartment is infested with bed bugs",
      "picture": "bedbugs.png"
    },
    {
      "user_id": 7,
      "location_id": 7,
      "category": "heating problem",
      "created_at": "2024-05-15T12:00:00Z",
      "description": "The heater in my bedroom is not working",
      "picture": "heater_issue.png"
    },
    {
      "user_id": 8,
      "location_id": 8,
      "category": "security concern",
      "created_at": "2024-05-15T12:00:00Z",
      "description": "There's a broken lock on my front door",
      "picture": "broken_lock.png"
    },
    {
      "user_id": 9,
      "location_id": 9,
      "category": "structural damage",
      "created_at": "2024-05-15T12:00:00Z",
      "description": "The ceiling in the hallway has a big crack",
      "picture": "crack_ceiling.png"
    },
    {
      "user_id": 10,
      "location_id": 10,
      "category": "plumbing issue",
      "created_at": "2024-05-15T12:00:00Z",
      "description": "The toilet is clogged and won't flush",
      "picture": "clogged_toilet.png"
    },
    {
      "user_id": 11,
      "location_id": 11,
      "category": "pest problem",
      "created_at": "2024-05-15T12:00:00Z",
      "description": "There's a mice infestation in the attic",
      "picture": "mice_infestation.png"
    },
    {
      "user_id": 12,
      "location_id": 12,
      "category": "electrical issue",
      "created_at": "2024-05-15T12:00:00Z",
      "description": "The light switch in the kitchen sparks when turned on",
      "picture": "spark_switch.png"
    },
    {
      "user_id": 13,
      "location_id": 13,
      "category": "heating problem",
      "created_at": "2024-05-15T12:00:00Z",
      "description": "The radiator in the living room doesn't heat up",
      "picture": "cold_radiator.png"
    },
    {
      "user_id": 14,
      "location_id": 14,
      "category": "security concern",
      "created_at": "2024-05-15T12:00:00Z",
      "description": "There's a broken window in the laundry room",
      "picture": "broken_window.png"
    },
    {
      "user_id": 15,
      "location_id": 15,
      "category": "mold",
      "created_at": "2024-05-15T12:00:00Z",
      "description": "There's mold growing on the bathroom tiles",
      "picture": "mold_tiles.png"
    },
    {
      "user_id": 1,
      "location_id": 1,
      "category": "mold",
      "created_at": "2024-05-15T12:00:00Z",
      "description": "There's a lot of mold on my ceiling",
      "picture": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.environix.com%2Fwp-content%2Fuploads%2FBlack-mold-on-ceiling-2.jpeg&f=1&nofb=1&ipt=3884a03fe67dfc8c1445ac121b70caf4cf84ca2fa8b38a49a752e1400e90251d&ipo=images"
    },
    {
      "user_id": 2,
      "location_id": 2,
      "category": "infestation",
      "created_at": "2024-05-15T12:00:00Z",
      "description": "There are roaches infested in my kitchen",
      "picture": "roaches.png"
    },
  ]);
};


