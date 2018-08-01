module.exports = (sequelize, type) => {
  return sequelize.define('bill', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: type.STRING
  })
}
