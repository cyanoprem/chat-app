const express = require('express')
const app = express()
const http = require('http')
const { Server } = require('socket.io')
const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: '*',
    allowedHeaders: '*',
    exposedHeaders: '*'
  }
})

module.exports = {app, server, io}