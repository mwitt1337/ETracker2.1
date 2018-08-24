const { District} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      let districts = null
      const search = req.query.search
      if (search) {
        districts = await District.findAll({
          where: {
            $or: [
              'id', 'name'
            ].map(key => ({
              [key]: {
                $like: `%${search}%`
              }
            }))
          }
        })
      } else {
        districts = await District.findAll({
          limit: 10
        })
      }
      res.send(districts)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch the districts'
      })
    }
  },
  async show (req, res) {
    try {
      const district = await District.findById(req.params.district.id)
      res.send(district)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the districts'
      })
    }
  },
  async post (req, res) {
    try {
      const song = await Song.create(req.body)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to create the song'
      })
    }
  },
  async put (req, res) {
    try {
      await Song.update(req.body, {
        where: {
          id: req.params.songId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to update the song'
      })
    }
  }
}