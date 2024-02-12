const { Schema, model } = require('mongoose')

const messageSchema = new Schema(
  {
  username: String,
  message: String
  },
  {
    timestamps: true
  }
)

const messageModel = model('messages', messageSchema)

module.exports = messageModel