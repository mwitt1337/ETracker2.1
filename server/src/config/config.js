module.exports = {
  port: 8081,
  db: {
    database: process.env.DB_NAME || 'etracker',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'admin',
    options: {
      dialect: process.env.DIALECT || 'mysql',
      host: process.env.HOST || 'localhost'
    }
  }
}
