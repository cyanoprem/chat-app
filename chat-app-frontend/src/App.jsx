import { useContext } from "react"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import { UsersContextProvider, usersContext } from "./providers/UsersContextProvider"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

const App = () => {

  const { token } = useContext(usersContext)

  return <>
    <Navbar />
    {
      token ? <>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </> : <>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<Navigate to="/signin" />} />
          <Route path="*" element={<Navigate to="/signin" />} />
        </Routes>
      </>
    }
  </>
}

export default App