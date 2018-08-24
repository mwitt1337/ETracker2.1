const SongsController = require('./controllers/controllerDistricts')

module.exports = (app) => {
  app.get('/districts',
    SongsController.index)
  app.get('/districts/:districtId',
    SongsController.show)
  app.put('/districts/:districtId',
    SongsController.put)
  app.post('/districts',
    SongsController.post)
}
