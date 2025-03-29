const knex = require('knex')
const knexConfig = require('../config/knexfile')
const data = knex(knexConfig)

module.exports = data