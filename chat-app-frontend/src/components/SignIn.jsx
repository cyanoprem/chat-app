import { useContext, useState } from "react"
import { usersContext } from "../providers/UsersContextProvider"
import { Link } from "react-router-dom"

const SignIn = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { signIn } = useContext(usersContext)

  return <>
    <p>Sign In</p>
    <input type="text" placeholder="Enter Username" onChange={(e) => { setUsername(e.target.value) }} />
    <input type="password" placeholder="Enter Password" onChange={(e) => { setPassword(e.target.value) }} />
    <button onClick={(e) => { signIn(username, password) }}>Sign In</button>
    <Link to='/signup'>New user? Signup</Link>
  </>
}

export default SignIn