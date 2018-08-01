module.exports = (sequelize, type) => {
  return sequelize.define('etracker', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: type.STRING
  })
}
