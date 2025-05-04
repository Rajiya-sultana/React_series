import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [length,setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password,setPassword]= useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass =""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "~!#$%^&*_+={}[]"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }
    setPassword(pass)
  },[length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
<div className="max-w-md mx-auto shadow-lg rounded-2xl px-6 py-6 my-10 text-orange-400 bg-gray-900">
  <h1 className="text-2xl font-bold text-center text-white mb-6">🔐 Password Generator</h1>
  <div className="flex items-center gap-3 mb-6">
    <input
      type="text"
      value={password}
      className="bg-white text-black rounded-lg outline-none w-full py-2 px-4 text-sm"
      placeholder="Password"
      readOnly
      ref={passwordRef}
    />
    <button
      onClick={copyPasswordToClipboard}
      className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-all duration-200"
    >
      Copy
    </button>
  </div>

  <div className="flex flex-col gap-4 text-sm text-white">
    <div className="flex items-center gap-3">
      <label htmlFor="lengthRange" className="whitespace-nowrap">
        Length: {length}
      </label>
      <input
        id="lengthRange"
        type="range"
        min={6}
        max={100}
        value={length}
        className="flex-grow cursor-pointer accent-orange-500"
        onChange={(e) => setLength(e.target.value)}
      />
    </div>

    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        id="numberAllowed"
        checked={numberAllowed}
        onChange={() => setNumberAllowed((prev) => !prev)}
        className="accent-orange-500"
      />
      <label htmlFor="numberAllowed">Include Numbers</label>
    </div>

    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        id="charAllowed"
        checked={charAllowed}
        onChange={() => setCharAllowed((prev) => !prev)}
        className="accent-orange-500"
      />
      <label htmlFor="charAllowed">Include Symbols</label>
    </div>
  </div>
</div>
    </>
  )
}

export default App
