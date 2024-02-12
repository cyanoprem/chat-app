const express = require('express')
const messageModel = require('../models/messageModel')
const messagesRouter = express.Router()
const isUserAuthorized = require('../middlewares/isUserAuthorized')


messagesRouter.post('/', isUserAuthorized, async (req, res) => {
  const { message } = req.body
  const { username } = req.currentUser
  const newMessage = new messageModel({
    username: username,
    message: message
  })
  await newMessage.save()
  res.json({
    message: 'Message Created'
  })
})

messagesRouter.get('/', isUserAuthorized, async (req, res) => {
  const allMessages = await messageModel.find().exec()
  res.json(allMessages)
})


module.exports = messagesRouter