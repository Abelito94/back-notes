const seeder = require('mongoose-seed')
require('dotenv').config()

const WALLPAPERS = require('./wallpapers.json')

seeder.connect(process.env.MONGO_URL + process.env.MONGO_DB, function () {
  seeder.loadModels(['api/models/wallpaper.model.js'])
  seeder.clearModels(['wallpaper'], function () {
    seeder.populateModels(WALLPAPERS, function () {
      seeder.disconnect()
    })
  })
})
