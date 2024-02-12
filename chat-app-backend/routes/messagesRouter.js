const express = require('express')
const messageModel = require('../models/messageModel')
const messagesRouter = express.Router()
const isUserAuthorized = require('../middlewares/isUserAuthorized')
const { io } = require('../middlewares/socket')


// messagesRouter.post('/', isUserAuthorized, async (req, res) => {
//   const { message } = req.body
//   const { username } = req.currentUser
//   const newMessage = new messageModel({
//     username: username,
//     message: message
//   })
//   const msg = await newMessage.save()
//   console.log(msg)
//   res.json({
//     message: 'Message Created'
//   })
// })

messagesRouter.get('/', isUserAuthorized, async (req, res) => {
  const allMessages = await messageModel.find().exec()
  res.json(allMessages)
})

io.on("connection", (socket) => {
  // console.log(`a user is connected ${socket.id}`)
  socket.on('send_message', async (data) => {
    const newMessage = new messageModel({
      username: data.username,
      message: data.message
    })
    const msg = await newMessage.save()
    io.emit('receive_message', msg)
  })

  // socket.on('disconnect', () => {
  //   console.log('User disconnected');
  // });
})

module.exports = messagesRouter