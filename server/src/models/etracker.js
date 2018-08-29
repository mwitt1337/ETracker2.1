module.exports = (sequelize, DataTypes) =>
  sequelize.define('etracker', {
    id: {type: DataTypes.INTEGER, primaryKey: true, unique: true},
    name: {type: DataTypes.STRING, allownull: false, defaultvalue: 'eTracker default item name'}
  })
