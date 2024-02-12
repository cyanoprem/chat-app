const express = require('express')
const userModel = require('../models/userModel')
const usersRouter = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const isUserAuthorized = require('../middlewares/isUserAuthorized')

usersRouter.post('/signup', async (req, res) => {
  const { username, password } = req.body
  existingUser = await userModel.findOne({ username: username }).exec()
  if (existingUser) {
    res.json({
      error: "Error, username already exists"
    })
  } else {
    const hash = bcrypt.hashSync(password, 10)
    const newUser = new userModel({
      username: username,
      passwordHash: hash
    })
    await newUser.save()
    res.json({
      message: "User created"
    })
  }
})

usersRouter.post('/signin', async (req, res) => {
  const { username, password } = req.body
  existingUser = await userModel.findOne({ username: username }).exec()
  if (!existingUser) {
    res.json({
      error: "Error! Username does not exist"
    })
  } else {
    const isPasswordMatch = bcrypt.compareSync(password, existingUser.passwordHash)
    if (!isPasswordMatch) {
      res.json({
        error: "Error! Invalid password"
      })
    } else {
      const token = jwt.sign({
        userId: existingUser._id,
        username: existingUser.username
      }, 's3cret')
      res.set('authorization', token)
      res.json({
        message: "Signin successful"
      })
    }
  }
})

usersRouter.get('/current-user', isUserAuthorized, async (req, res) => {
  const { userId, username } = req.currentUser
  res.json({
    userId: userId,
    username: username
  })
})


module.exports = usersRouter