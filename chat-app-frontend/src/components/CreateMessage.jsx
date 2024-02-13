import { useContext, useState, useEffect } from "react"
import { usersContext } from "../providers/UsersContextProvider"
import { io } from "socket.io-client"
import { messagesContext } from "../providers/MessagesContextProvider"



const CreateMessage = () => {

  const [newMessage, setNewMessage] = useState('')
  const { currentUser } = useContext(usersContext)
  const { setAllMessages, allMessages } = useContext(messagesContext)
  const socket = io.connect('http://localhost:8000')

  useEffect(() => {
    socket.on('receive_message', (data) => {
      const { _id, username, message } = data
      const newMessage = {
        id: _id,
        username: username,
        message: message
      }
      setAllMessages([...allMessages, newMessage])
      // console.log(allMessages)
    })
  }, [socket])


  return <div className="box" id="create-message-container">
    <input type="text" placeholder="Enter message" onChange={(e) => setNewMessage(e.target.value)} value={newMessage} className="input" id="message-input"/>
    <button onClick={() => {
      socket.emit('send_message', { username: currentUser, message: newMessage })
      setNewMessage('')
    }} className="button is-link ml-2">Send</button>
  </div>
}

export default CreateMessage