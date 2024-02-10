const { Schema, model } = require('mongoose')

const messageSchema = new Schema(
  {
  message: String
  },
  {
    timestamps: true
  }
)

const messageModel = model('messages', messageSchema)

module.exports = messageModel