module.exports = (sequelize, DataTypes) =>
  sequelize.define('bill', {
    id: {type: DataTypes.INTEGER, primaryKey: true, unique: true},
    startDate: {type: DataTypes.DATE, allowNull: false},
    endDate: {type: DataTypes.DATE, allowNull: false},
    actualUsage: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 0},
    actualCost: {type: DataTypes.FLOAT, allowNull: false, defaultValue: 0}
  })
