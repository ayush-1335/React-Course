import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(number){
      str += "0123456789"
    }
    if(char){
      str += "!@#$%^&*~`"
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, number, char])

  const copyPassword = () => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,20);
    window.navigator.clipboard.writeText(password)
  }

// passwordGenerator() //Not the right way to call

useEffect(()=>{
  passwordGenerator()
}, [length, number, char, passwordGenerator])

return (
    <>
      <div className='w-full text-center max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className="text-center text-white my-4">Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 items-center'>
          <input 
            type="text" 
            value={password} 
            className='outline-none w-full py-2 px-3 my-3   rounded-l-lg'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button 
            onClick={copyPassword}
            className='outline-none bg-blue-700 text-white px-4 py-2 shrink-0 rounded-r-lg'>copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1 my-3'>
            <input 
              type="range"
              min={8}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{setLength(e.target.value)}} 
              />
              <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1 my-3'>
            <input 
              type="checkbox"
              defaultChecked={number}
              id="numberInput"
              onChange={()=>{
                setNumber((prev) => !prev)
              }} 
              />
            <label>Number</label>
          </div>
          <div className='flex items-center gap-x-1 my-3'>
            <input 
              type="checkbox"
              defaultChecked={char}
              id="charInput"
              onChange={()=>{
                setChar((prev) => !prev)
              }} 
              />
            <label>Char</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
