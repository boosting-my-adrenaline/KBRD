const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  exp: { type: Number, default: 0 },
  achievements: { type: Array, default: [] },
})

module.exports = model('Book', schema)
