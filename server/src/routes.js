// const AuthenticationController = require('./controllers/AuthenticationController')
// const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const DistrictController = require('./controllers/districtController')
const BuildingController = require('./controllers/buildingController')

// const isAuthenticated = require('./policies/isAuthenticated')

module.exports = (app) => {
  app.get('/districts', DistrictController.index)
  app.get('/districts/:Id', DistrictController.show)
  app.put('/districts/:Id', DistrictController.put)
  app.post('/districts', DistrictController.post)
  app.delete('/districts/:Id', DistrictController.remove)

  app.get('/buildings', BuildingController.index)
  app.get('/buildings/:Id', BuildingController.show)
  app.put('/buildings/:Id', BuildingController.put)
  app.post('/buildings', BuildingController.post)
  app.delete('/buildings/:Id', BuildingController.remove)
}
