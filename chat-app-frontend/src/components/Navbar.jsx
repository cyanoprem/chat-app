import { useContext } from "react"
import { Link } from "react-router-dom"
import { usersContext } from "../providers/UsersContextProvider"

const Navbar = () => {

  const { token, setToken, currentUser, setCurrentUser } = useContext(usersContext)

  const signOut = () => {
    localStorage.removeItem('authorization')
    setToken('')
    setCurrentUser('')
  }

  return <>
    {
      token ? <>
        <p>Hello, {currentUser}</p>
        <Link to='/signin' onClick={signOut}>Sign Out</Link>
      </> : <>
        <p>Chat App</p>
      </>
    }
  </>
}

export default Navbar