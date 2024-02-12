import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom"


const usersContext = createContext({
  signUp: async () => { },
  signIn: async () => { },
  token: '',
  setToken: () => { },
  getCurrentUser: async () => { },
  currentUser: '',
  setCurrentUser: () => { },
})

const UsersContextProvider = ({ children }) => {

  const [token, setToken] = useState(localStorage.getItem('authorization'))
  const [currentUser, setCurrentUser] = useState('')

  const navigate = useNavigate()

  const signUp = async (username, password) => {
    const response = await fetch('http://localhost:8000/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
    const data = await response.json()
    if (data.error) {
      alert(data.error)
    } else {
      console.log(data.message)
      navigate('/signin')
    }
  }

  const signIn = async (username, password) => {
    const response = await fetch('http://localhost:8000/user/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
    const data = await response.json()
    const token = response.headers.get('authorization')
    localStorage.setItem('authorization', token)
    setToken(token)
    if (data.error) {
      alert(data.error)
    } else {
      // console.log(data.message, token)
      navigate('/home')
    }
  }

  const getCurrentUser = async () => {
    const response = await fetch('http://localhost:8000/user/current-user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: token
      }
    })
    const data = await response.json()
    setCurrentUser(data.username)
  }


  return <>
    <usersContext.Provider value={{ signUp, signIn, token, setToken, getCurrentUser, currentUser, setCurrentUser }}>
      {children}
    </usersContext.Provider>
  </>
}

export { UsersContextProvider, usersContext }