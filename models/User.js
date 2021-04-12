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

  boat: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Boat'
    }
  ]

})

User.plugin(require('passport-local-mongoose'))

module.exports = model('User', User)