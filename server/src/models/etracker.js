module.exports = (sequelize, DataTypes) =>
  sequelize.define('etracker', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true
    },
    name: DataTypes.STRING
  })
