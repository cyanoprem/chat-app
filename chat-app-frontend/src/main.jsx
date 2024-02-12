import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { UsersContextProvider, usersContext } from "./providers/UsersContextProvider"
import { MessagesContextProvider } from './providers/MessagesContextProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UsersContextProvider>
        <MessagesContextProvider>
          <App />
        </MessagesContextProvider>
      </UsersContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
