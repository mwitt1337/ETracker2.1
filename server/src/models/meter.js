module.exports = (sequelize, DataTypes) =>
  sequelize.define('meter', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true
    },
    name: DataTypes.STRING
  })
