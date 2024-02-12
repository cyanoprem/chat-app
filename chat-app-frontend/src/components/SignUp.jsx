import { useContext, useState } from "react"
import { usersContext } from "../providers/UsersContextProvider"
import { Link } from "react-router-dom"

const SignUp = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { signUp } = useContext(usersContext)

  return <>
    <p>Sign Up</p>
    <input type="text" placeholder="Enter Username" onChange={(e) => { setUsername(e.target.value) }} />
    <input type="password" placeholder="Enter Password" onChange={(e) => { setPassword(e.target.value) }} />
    <button onClick={(e) => { signUp(username, password) }}>Sign Up</button>
    <Link to='/signin'>Existing user? Signin</Link>
  </>
}

export default SignUp