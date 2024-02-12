const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const usersRouter = require('./routes/usersRouter')
const messagesRouter = require('./routes/messagesRouter')
const { app, server } = require('./middlewares/socket')


app.use(cors({
  origin: '*',
  methods: '*',
  allowedHeaders: '*',
  exposedHeaders: '*'
}))
app.use(express.json())
app.use('/user', usersRouter)
app.use('/messages', messagesRouter)


server.listen(8000, async () => {
  await mongoose.connect('mongodb+srv://burztcrew:0NdsKMN4Ib8CG3oc@cluster0.36xw4ev.mongodb.net/chat-app-db?retryWrites=true&w=majority')
  console.log('Connected to Chat App DB & Listening on PORT 8000')
})