import React from 'react'

function Card({username,btnText="visit me"}) {
  return (
    <div class="max-w-sm  bg-white rounded-2xl shadow-md overflow-hidden">
    <img class="w-full h-48 object-cover" src="https://images.pexels.com/photos/15924270/pexels-photo-15924270/free-photo-of-cups-with-cappuccinos-on-wooden-board-on-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Card Image"/>
   <div class="p-4">
     <h2 class="text-2xl font-bold text-gray-800 mb-2">{username}</h2>
     <p class="text-gray-600 mb-4">This is a simple card description. You can customize it as you like!</p>
     <button class="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition">{btnText}</button>
   </div>
 </div>
  )
}

export default Card