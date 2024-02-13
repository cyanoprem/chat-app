import { useContext, useState } from "react"
import { usersContext } from "../providers/UsersContextProvider"
import { Link } from "react-router-dom"

const SignIn = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { signIn } = useContext(usersContext)

  return <div className="box form-box">
    <p className="is-size-4 mb-4">Sign In</p>
    <input type="text" placeholder="Enter Username" onChange={(e) => { setUsername(e.target.value) }} className="input mb-4"/>
    <input type="password" placeholder="Enter Password" onChange={(e) => { setPassword(e.target.value) }} className="input mb-4"/>
    <button onClick={(e) => { signIn(username, password) }} className="button is-link mb-4">Sign In</button>
    <br />
    <Link to='/signup'>New user? Signup</Link>
  </div>
}

export default SignIn