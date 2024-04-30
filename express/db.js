const postgres = require('postgres');

const sql = postgres({
  host                 : 'localhost',           // Postgres ip address[s] or domain name[s]
  port                 : 5432,                  // Postgres server port[s]
  database             : 'store',               // Name of database to connect to
  username             : 'postgres',            // Username of database user
  password             : 'col@123',             // Password of database user
})

module.exports= sql;