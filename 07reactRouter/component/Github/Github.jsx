// import React, { useEffect, useState } from 'react'

import { useLoaderData } from 'react-router-dom'



function Github() {
  const data = useLoaderData()
  // const [data,setData] = useState([])
  // useEffect(()=>{
  // fetch("https://api.github.com/users/Rajiya-sultana")
  // .then(res => res.json() )
  // .then(data => {
  //   setData(data)
  // })
  // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl' >Github followers : {data.followers} </div>
  )
}

export default Github

export const githubInfoLoader = async () =>{
  const response = await fetch("https://api.github.com/users/Rajiya-sultana")
  return response.json()
}