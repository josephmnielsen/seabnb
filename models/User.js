const { model, Schema } = require('mongoose')

const User = new Schema({
  name: {
    type: String, 
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  boats: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Boat'
    }
  ]

})

module.exports = model('User', User)