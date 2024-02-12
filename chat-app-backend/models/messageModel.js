const { Schema, model } = require('mongoose')

const messageSchema = new Schema(
  {
  userId: Schema.Types.ObjectId,
  message: String
  },
  {
    timestamps: true
  }
)

const messageModel = model('messages', messageSchema)

module.exports = messageModel