import { useState } from "react"



function App() {
  let [counter,setCounter] = useState(15)
  const addValue = () =>{
    if(counter < 20){
      setCounter((prevCount)=> prevCount +1)
      setCounter((prevCount)=> prevCount +1)
      setCounter((prevCount)=> prevCount +1)
      setCounter((prevCount)=> prevCount +1)
    }
  }

  const removeValue = () =>{
    if(counter > 1)
    setCounter(counter - 1)
  }
  return (
    <>
     <h1>Chai aur react</h1>
     <h1>Counter value : {counter} </h1>
     <button onClick={addValue} >Add value</button>
     <button onClick={removeValue} >Remove value</button>
    </>
 
  )
}

export default App
