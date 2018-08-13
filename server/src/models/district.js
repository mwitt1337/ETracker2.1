module.exports = (sequelize, DataTypes) =>
  sequelize.define('district', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true
    },
    name: DataTypes.STRING
  })
