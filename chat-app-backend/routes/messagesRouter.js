const express = require('express')
const messageModel = require('../models/messageModel')
const messagesRouter = express.Router()
const isUserAuthorized = require('../middlewares/isUserAuthorized')


messagesRouter.post('/', isUserAuthorized, async (req, res) => {
  const { message } = req.body
  const { userId } = req.currentUser

  const newMessage = new messageModel({
    userId: userId,
    message: message
  })

  await newMessage.save()

  res.json({
    message: 'Message Created'
  })

})


module.exports = messagesRouter