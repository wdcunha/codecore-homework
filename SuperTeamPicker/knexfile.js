const sharedConfig = {
  client: 'postgresql',
  migrations: {
    tableName: 'knex_migrations',
    directory: './db/migrations'
  }
}

module.exports = {

  development: {
    ...sharedConfig,
    connection: {
      database: 'team_peacker_dev'
    }
  },

  staging: {
    ...sharedConfig,
    connection: {
      database: 'team_peacker_dev'
    },
  },

  production: {
    ...sharedConfig,
    connection: {
      database: 'team_peacker_dev'
    },
  }
};
