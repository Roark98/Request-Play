const {config} = require('dotenv')
config()

module.exports = {
  db: {
    user: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "1379",
    host: process.env.DB_HOST || "host.docker.internal",
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE
  },
};
