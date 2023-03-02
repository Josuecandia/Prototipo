import React from 'react'
import './app.css'
import SideBar from './components/Side Bar Section/SideBar'
import Body from './components/Body Section/Body'



const App = () => {
  return (
    <div className='container'>
      <SideBar/>
      <Body/>
    </div>
  )
}

export default App