import React from 'react'
import { useState } from 'react'

function App() {
const [Color,setColor] = useState("olive")


  return (
    <div className='w-full h-screen  ' style={{backgroundColor : Color}}>
      <div className=' fixed bottom-12 inset-x-0 flex items-center flex-wrap justify-center px-3'  >
         <div className='flex flex-wrap items-center gap-2 justify-center bg-white px-3 py-2 rounded-3xl' >
           <button onClick={()=> setColor("red")} className='outline-0 px-4 py-1 text-white rounded-full' style={{backgroundColor:"red"}} >Red</button>
           <button onClick={()=> setColor("blue")} className='outline-0 px-4 py-1 text-white rounded-full' style={{backgroundColor:"blue"}} >Blue</button>
           <button onClick={()=> setColor("green")} className='outline-0 px-4 py-1 text-white rounded-full' style={{backgroundColor:"green"}} >Green</button>
           <button onClick={()=> setColor("yellow")} className='outline-0 px-4 py-1 text-black rounded-full' style={{backgroundColor:"yellow"}} >Yellow</button>
         </div>
      </div>
    </div>
  )
}

export default App