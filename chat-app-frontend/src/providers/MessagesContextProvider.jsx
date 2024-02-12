import { createContext } from "react"

const messagesContext = createContext()

const MessagesContextProvider = ({ children }) => {
  return <>
    <messagesContext.Provider value={{}}>
      {{ children }}
    </messagesContext.Provider>
  </>
}

export { MessagesContextProvider, messagesContext }