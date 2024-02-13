import { createContext, useContext, useEffect, useState } from "react"
import { usersContext } from "./UsersContextProvider"

const messagesContext = createContext({
  getAllMessages: async () => { },
  allMessages: [],
  setAllMessages: () => { },
})

const MessagesContextProvider = ({ children }) => {

  const [allMessages, setAllMessages] = useState([])
  const { token } = useContext(usersContext)
  const url = 'https://chat-app-backend-doic.onrender.com/'
  // const url = 'http://localhost:8000/'

  const getAllMessages = async () => {
    const response = await fetch(`${url}messages`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        authorization: token
      }
    })
    const data = await response.json()
    const msgs = data.map((msg) => {
      return {
        id: msg._id,
        username: msg.username,
        message: msg.message
      }
    })
    // console.log(msgs)
    setAllMessages(msgs)
  }

  return <>
    <messagesContext.Provider value={{ allMessages, getAllMessages, setAllMessages }}>
      {children}
    </messagesContext.Provider>
  </>
}

export { MessagesContextProvider, messagesContext }