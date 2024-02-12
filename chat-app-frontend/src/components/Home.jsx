import { useContext, useEffect } from "react"
import { usersContext } from "../providers/UsersContextProvider"
import { messagesContext } from "../providers/MessagesContextProvider"
import AllMessages from "./AllMessages"
import CreateMessage from "./CreateMessage"


const Home = () => {

  const { getCurrentUser, currentUser } = useContext(usersContext)
  const { getAllMessages, allMessages } = useContext(messagesContext)

  useEffect(() => {
    if (!currentUser) {
      getCurrentUser()
      getAllMessages()
    }
  }, [currentUser, allMessages])

  return <>
    <AllMessages />
    <CreateMessage />
  </>
}

export default Home