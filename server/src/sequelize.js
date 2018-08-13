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
const etrackerdistrict = sequelize.define('etracker_district', {})

bill.belongsTo(meter)
meter.belongsTo(building)
building.belongsTo(district)
etracker.belongsTo(district)
district.belongsToMany(etracker, {through: etrackerdistrict, unique: true})

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
