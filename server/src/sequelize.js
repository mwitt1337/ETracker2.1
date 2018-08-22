const Sequelize = require('sequelize')
const districtModel = require('./models/district')
const buildingModel = require('./models/building')
const meterModel = require('./models/meter')
const billModel = require('./models/bill')
const etrackerModel = require('./models/etracker')

const sequelize = new Sequelize('etracker', 'root', 'admin', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

const district = districtModel(sequelize, Sequelize)
const building = buildingModel(sequelize, Sequelize)
const meter = meterModel(sequelize, Sequelize)
const bill = billModel(sequelize, Sequelize)
const etracker = etrackerModel(sequelize, Sequelize)

district.hasMany(building, {foreignKey: 'id', sourcekey: 'id'})
building.belongsTo(district, {foreignKey: 'id', targetKey: 'id'})

building.hasMany(meter, {foreignKey: 'id', sourceKey: 'id'})
meter.belongsTo(building, {foreignKey: 'id', targetKey: 'id'})

meter.hasMany(bill, {foreignKey: 'id', sourceKey: 'id'})
bill.belongsTo(meter, {foreignKey: 'id', targetKey: 'id'})

bill.belongsTo(etracker, {foreignKey: 'id', targetKey: 'id'})

sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`)
  })

module.exports = {
  bill,
  meter,
  building,
  etracker,
  district
}

const districts = sequelize.define('districts', {
  Name: {
    type: sequelize.STRING,
    field: 'district'
  }
}, {
  freezeTableName: true
})

districts.sync({force: false}).then(function () {
  // Table created
  return districts.create({
    Name: 'Frontier'
  })
})
