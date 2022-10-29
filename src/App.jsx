import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './components/Home/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <Router>
        <Routes>
        <Route  path="/">
          <Route index element={<Home/>}/>
          </Route>
        </Routes>
    </Router>
  )
}

export default App
