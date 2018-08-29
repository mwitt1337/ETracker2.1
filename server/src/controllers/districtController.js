const {District} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      let districts = null
      const search = req.query.search
      if (search) {
        districts = await District.findAll({
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
        districts = await District.findAll({ limit: 100 })
      }
      res.send(districts)
    } catch (err) {
      res.status(500).send({
        error: 'Error trying to find the districts'
      })
    }
  },
  async show (req, res) {
    try {
      const district = await District.findById(req.params.Id)
      res.send(district)
    } catch (err) {
      res.status(500).send({
        error: 'Error trying to show the districts'
      })
    }
  },
  async post (req, res) {
    try {
      const district = await District.create(req.body)
      res.send(district)
    } catch (err) {
      res.status(500).send({
        error: 'Error trying to create the district.'
      })
    }
  },
  async put (req, res) {
    try {
      await District.update(req.body, {
        where: {
          id: req.params.Id
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'Error trying to update the district.'
      })
    }
  },
  async remove (req, res) {
    try {
      await District.remove(req.body, { where: { id: req.params.Id } })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'Error trying to remove the district.'
      })
    }
  }
}
