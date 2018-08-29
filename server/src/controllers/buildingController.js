const {Building} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      let buildings = null
      const search = req.query.search
      if (search) {
        buildings = await Building.findAll({
          where: {
            $or: [
              'name'
            ].map(key => ({
              [key]: {
                $like: `%${search}%`
              }
            }))
          }
        })
      } else {
        buildings = await Building.findAll({ limit: 100 })
      }
      res.send(buildings)
    } catch (err) {
      res.status(500).send({
        error: 'Error trying to find buildings.'
      })
    }
  },
  async show (req, res) {
    try {
      const building = await Building.findById(req.params.Id)
      res.send(building)
    } catch (err) {
      res.status(500).send({
        error: 'Error trying to show buildings.'
      })
    }
  },
  async post (req, res) {
    try {
      const building = await Building.create(req.body)
      res.send(building)
    } catch (err) {
      res.status(500).send({
        error: 'Error trying to create building.'
      })
    }
  },
  async put (req, res) {
    try {
      await Building.update(req.body, {
        where: {
          id: req.params.Id
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'Error trying to update the building.'
      })
    }
  },
  async remove (req, res) {
    try {
      await Building.remove(req.body, {
        where: {
          id: req.params.Id
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'Error trying to remove building.'
      })
    }
  }
}
