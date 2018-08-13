module.exports = (app) => {
  app.get('/status', (req, res) => {
    res.send({
      message: 'hello world!'
    })
  })
  // Admin Panel Routes
  app.post('/adminpanel/districts', (req, res) => {
    res.send({message: 'Districts Requested.'})
  })
}
