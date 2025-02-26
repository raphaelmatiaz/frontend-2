import './App.css'
// import Card from './components/Card/Card.tsx'
// import Greeting from './components/Greeting.tsx'
// import AccountBalance from './components/AccountBalance.tsx'
import HomePage from './pages/Home.tsx'
import AboutPage from './pages/About.tsx'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav.tsx'
import React from 'react'

import { Provider } from 'react-redux';
import { store } from './redux/store.ts'

// export const Context = React.createContext();

function App() {

  // const [signedIn, setSignedIn] = useState(false)

  return (
    <Provider store={store}>
      <Nav></Nav>
    </Provider>
  )
}

export default App
