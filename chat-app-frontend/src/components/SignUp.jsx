import { useContext, useState } from "react"
import { usersContext } from "../providers/UsersContextProvider"
import { Link } from "react-router-dom"

const SignUp = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { signUp } = useContext(usersContext)

  return <div className="box form-box">
    <p className="is-size-4 mb-4">Sign Up</p>
    <input type="text" placeholder="Enter Username" onChange={(e) => { setUsername(e.target.value) }} className="input mb-4" />
    <input type="password" placeholder="Enter Password" onChange={(e) => { setPassword(e.target.value) }} className="input mb-4" />
    <button onClick={(e) => { signUp(username, password) }} className="button is-link mb-4">Sign Up</button>
    <br />
    <Link to='/signin'>Existing user? Signin</Link>
  </div>
}

export default SignUp