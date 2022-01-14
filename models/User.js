const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // book: [{ type: Types.ObjectId, ref: 'Book' }],
  exp: { type: Number, default: 0 },
  // links: [{ type: Types.ObjectId, ref: 'Link' }],
  // book: {
  //   type: Types.ObjectId,
  //   default: {
  //     exp: 0,
  //   },
  // },
})

module.exports = model('User', schema)
