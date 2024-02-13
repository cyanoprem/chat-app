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

  return <div className="box" id="nav-fix-top">
    {
      token ? <div id="home-nav">
        <p className="is-size-6">Hello, {currentUser}</p>
        <Link to='/signin' onClick={signOut} className="is-size-6">Sign Out</Link>
      </div> : <div id="app-name">
        <p className="is-size-3 has-text-link">Chat App</p>
      </div>
    }
  </div>
}

export default Navbar