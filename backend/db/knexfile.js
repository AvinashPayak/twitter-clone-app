// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const {knexSnakeCaseMappers} = require('objection');
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'twitter_clone_app',
      user:     'postgres',
      password: 'bangdu1997'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds'
    },
    ...knexSnakeCaseMappers
  },
};
