import {useState} from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10) 
  // let counter = 10;

  const addValue = () => {
    // counter = counter + 1
    if(counter <500){
      setCounter(counter => counter + 1)
    }
    
  }
  const addValueByTwo = () => {
    // counter = counter + 1
    if(counter <500){
      setCounter(counter => counter + 2)
    }
    
  }

  const removeValue = () => {
    // counter = counter - 1
    if(counter > 0){
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1> Counter </h1>
      <h2> Counter Value : {counter}</h2>
      <div><button onClick={() => {
        addValue();
        // addValueByTwo();
      }}> Add value </button></div>
      <div><button onClick={removeValue}> Decrease value </button></div>
    </>
  )
}

export default App