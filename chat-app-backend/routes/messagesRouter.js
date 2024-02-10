const express = require('express')
const messageModel = require('../models/messageModel')
const messagesRouter = express.Router()


messagesRouter.post('/', async (req, res) => {
  const { message } = req.body

  const newMessage = new messageModel({
    message: message
  })

  await newMessage.save()

  res.json({
    message: 'Message Created'
  })

})


module.exports = messagesRouter