import React from 'react'
import Card from '../components/card'


const App = () => {
  return (
    <>
    <div className='bg-amber-700 text-center text-4xl font-bold underline mb-4' >App</div>
    <div className='flex items-center justify-center gap-3' >
    <Card username="sultana" btnText="click me" />
    <Card username="rajiya" />
    </div>
    </>
  )
}

export default App