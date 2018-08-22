module.exports = (sequelize, DataTypes) =>
  sequelize.define('meter', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true
    },
    name: {type: DataTypes.STRING, allowNull: false, defaultVaule: 'Enter Meter Name'},
    utility: {type: DataTypes.STRING, allowNull: false, defaultValue: 'Electricity - KWH'},
    baseMonth: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 1},
    baseYear: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 2018},
    baseActualUsage: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 0},
    baseCost: {type: DataTypes.FLOAT, allowNull: false, defaultValue: 0},
    daysCoefficient: {type: DataTypes.FLOAT, allowNull: false, defaultValue: 0},
    hddCoefficient: {type: DataTypes.FLOAT, allowNull: false, defaultValue: 0},
    cddCoefficient: {type: DataTypes.FLOAT, allowNull: false, defaultValue: 0},
    otherCoefficient: {type: DataTypes.FLOAT, allowNull: false, defaultValue: 0},
    hddBaseTemperature: {type: DataTypes.FLOAT, allowNull: false, defaultValue: 0},
    cddBaseTemperature: {type: DataTypes.FLOAT, allowNull: false, defaultValue: 0}
  })
