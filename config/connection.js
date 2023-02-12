const knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : 'localhost',
      user : 'root',
      password : 'muzambinho13',
      database : 'blogtech2',
      port:'3307'
    }
});
module.exports = knex