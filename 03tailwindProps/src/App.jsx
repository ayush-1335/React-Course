import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  let myObj = {
    name: 'xyz',
    gender: 'male'
  }

  return (
    <>
      <h1 className='bg-black text-white p-4 rounded-xl mb-4'>Tailwind & Props</h1>

      {/* <Card obj={myObj}/> */}
      <Card titleName="First" avail="Out of Stock"/>
      <br />
      <Card titleName="Second"/>
    </>
  )
}

export default App
