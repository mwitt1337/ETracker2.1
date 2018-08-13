module.exports = (sequelize, DataTypes) =>
  sequelize.define('bill', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true
    },
    name: DataTypes.STRING
  })
