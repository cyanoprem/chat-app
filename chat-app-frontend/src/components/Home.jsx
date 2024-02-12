import { useContext, useEffect } from "react"
import { usersContext } from "../providers/UsersContextProvider"
import { messagesContext } from "../providers/MessagesContextProvider"
import AllMessages from "./AllMessages"


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
  </>
}

export default Home