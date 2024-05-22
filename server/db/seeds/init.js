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
      "user_id": 1,
      "location_id": 1,
      "category": "mold",
      "created_at": "2024-05-15T12:00:00Z",
      "description": "There's a lot of mold on my ceiling. I started noticing it a month ago and I told my landlord a couple weeks ago but he has not responded to me.",
      "picture": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.environix.com%2Fwp-content%2Fuploads%2FBlack-mold-on-ceiling-2.jpeg&f=1&nofb=1&ipt=3884a03fe67dfc8c1445ac121b70caf4cf84ca2fa8b38a49a752e1400e90251d&ipo=images"
    },
    {
      "user_id": 2,
      "location_id": 2,
      "category": "infestation",
      "created_at": "2024-05-15T12:00:00Z",
      "description": "There are roaches infested in my kitchen. I keep my apartment clean and I never leave food out in my kitchen, and I notice it's coming from the pipes under my sink. I told my landlord about it and he told me that he'd fix the problem but has not gotten back to me.",
      "picture": "roaches.png"
    },
    {
      "user_id": 3,
      "location_id": 3,
      "category": "structural damage",
      "created_at": "2024-05-15T12:00:00Z",
      "description": "There's a crack in the wall of my living room. It started small about 3 months ago, but I slowly noticed it getting bigger. I also have heard my neighbor talk about something similar in her wall, and it's scaring me because the crack is right above my bed.",
      "picture": "crack.png"
    },
    {
      "user_id": 4,
      "location_id": 4,
      "category": "plumbing issue",
      "created_at": "2024-05-15T12:00:00Z",
      "description": "Water is leaking from the bathroom sink. It's been happening since I got back from my vacation 2 months ago. Everytime I go to wash my hands in the bathroom sink, I hear a lot of water leak from the pipes in the cabinet. I plan on telling my landlord, but I'm wondering if anyone else has similar issues.",
      "picture": "leak.png"
    },
    {
      "user_id": 5,
      "location_id": 5,
      "category": "pest problem",
      "created_at": "2024-05-15T12:00:00Z",
      "description": "My apartment is infested with bed bugs. I started noticing them in my bed two months after I moved in. I have three kids and they started getting bitten too. I paid for an exterminator, but they kept coming back. I called my landlord but he hasn't gotten back to me. Does anyone else in my complex share the same problem?",
      "picture": "bedbugs.png"
    },
    {
      "user_id": 6,
      "location_id": 6,
      "category": "electrical issue",
      "created_at": "2024-05-15T12:00:00Z",
      "description": "There's a short circuit in the living room. Everytime I go to plug in any outlet in my living room, I see a spark of electricity. My landlord called me two months ago and said that he'd come over, but he never did. This is so dangerous!! And it's unacceptable for this to keep happening, does anyone else have a similar problem?",
      "picture": "short_circuit.png"
    },
    {
      "user_id": 7,
      "location_id": 7,
      "category": "heating problem",
      "created_at": "2024-05-15T12:00:00Z",
      "description": "The heater in my bedroom is not working. I am an elderly woman, and in the winter time the cold is really harsh on my body. I called my landlord 12 times but have not gotten a response. Does anyone in my complex know how to fix a broken heater or have the tools?",
      "picture": "heater_issue.png"
    },
    {
      "user_id": 8,
      "location_id": 8,
      "category": "security concern",
      "created_at": "2024-05-15T12:00:00Z",
      "description": "There's a broken lock on my front door. I noticed it happened last Thursday when I got home from work and the thing is this is not the first time this has happened. I called the cops and my landlord and nothing came of it. I know my neighbor experienced something similar. If more of us go to the police maybe there will be more for them to work with.",
      "picture": "broken_lock.png"
    },
    {
      "user_id": 9,
      "location_id": 9,
      "category": "structural damage",
      "created_at": "2024-05-15T12:00:00Z",
      "description": "The ceiling in the hallway has a big crack. I noticed it a few weeks ago, but I don't know what to do because it keeps getting better and the ceiling is sinking in. My landlord won't do anything and I'm sick and tired of this. Does anyone have any experience with this too?",
      "picture": "crack_ceiling.png"
    },
    {
      "user_id": 10,
      "location_id": 10,
      "category": "plumbing issue",
      "created_at": "2024-05-15T12:00:00Z",
      "description": "The toilet in my bathroom won't flush. This is an emergency and I don't know what to do  ",
      "picture": "clogged_toilet.png"
    },
    {
      "user_id": 11,
      "location_id": 11,
      "category": "pest problem",
      "created_at": "2024-05-15T12:00:00Z",
      "description": "There's a mice infestation in the attic. The mice were already here when I moved in. But this is the second year and it's gotten so bad that I hear them in the night and during the day. What do I do about this? I assume my neighbors are dealing with similar issues.",
      "picture": "mice_infestation.png"
    },
    {
      "user_id": 12,
      "location_id": 12,
      "category": "electrical issue",
      "created_at": "2024-05-15T12:00:00Z",
      "description": "The light switch in the kitchen sparks when turned on. I live with children and my parents who are elderly. This is so dangerous and my landlord isn't taking this problem seriously. What do I do? Do any of my neighbors know how to fix electrical problems?",
      "picture": "spark_switch.png"
    },
    {
      "user_id": 13,
      "location_id": 13,
      "category": "heating problem",
      "created_at": "2024-05-15T12:00:00Z",
      "description": "The radiator in the living room doesn't heat up. I have a newborn baby and for the sake of my child this is a really dangerous problem. I went to my landlord and she came over once to look at it, but she didn't actually fix the problem or hire anyone to fix it. I need help!",
      "picture": "cold_radiator.png"
    },
    {
      "user_id": 14,
      "location_id": 14,
      "category": "security concern",
      "created_at": "2024-05-15T12:00:00Z",
      "description": "There's a broken window in the laundry room. Nothing else was damaged or stolen, but I don't know what to do because I feel so unsafe. I hope this doesn't happen again",
      "picture": "broken_window.png"
    },
    {
      "user_id": 15,
      "location_id": 15,
      "category": "mold",
      "created_at": "2024-05-15T12:00:00Z",
      "description": "There's mold growing on the bathroom tiles. The ventilation in my bathroom are blocked and I think that contributes a lot to the mold problem. Called my landlord about it three weeks: no response. Do any of my neighbors have any way of dealing with this?",
      "picture": "mold_tiles.png"
    },
  ]);
};


