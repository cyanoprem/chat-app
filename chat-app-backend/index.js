const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

app.use(cors({
  origin: '*',
  methods: '*',
  allowedHeaders: '*',
  exposedHeaders: '*'
}))
app.use(express.json())

const connectDbAndStart = async () => {
  await mongoose.connect('mongodb+srv://burztcrew:0NdsKMN4Ib8CG3oc@cluster0.36xw4ev.mongodb.net/chat-app-db?retryWrites=true&w=majority')
  console.log('Connected to Chat App DB')
  app.listen(8000)
}

connectDbAndStart()