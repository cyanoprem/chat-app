import { useContext, useEffect } from "react"
import { messagesContext } from "../providers/MessagesContextProvider"
import Message from "./Message"


const AllMessages = () => {

  const { getAllMessages, allMessages } = useContext(messagesContext)

  useEffect(() => {
    if (!allMessages) {
      getAllMessages()
    }
  }, [allMessages])

  return <>
    {allMessages.map((msg) => {
      return <Message key={msg.id} username={msg.username} message={msg.message} />
    })}

  </>
}

export default AllMessages