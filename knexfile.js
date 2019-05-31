// Update with your config settings.

module.exports = {

  //GAMES SETUP ⬇︎
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data//games/games.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/games/migrations'
    },
    seeds: {
      directory: './data/games/seeds'
    }
  },

  //TESTS SETUP ⬇︎
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/games/tests.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/games/migrations'
    },
    seeds: {
      directory: './data/games/seeds'
    }
  }
};
