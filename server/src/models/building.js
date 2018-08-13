module.exports = (sequelize, DataTypes) =>
  sequelize.define('building', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true
    },
    name: DataTypes.STRING
  })
