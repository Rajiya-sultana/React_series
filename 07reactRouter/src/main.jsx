import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, useLoaderData } from 'react-router-dom'
import Layout from '../Layout.jsx'
import Home from '../component/Home/Home.jsx'
import About from '../component/About/About.jsx'
import Contact from '../component/Contact/Contact.jsx'
import User from '../component/User/User.jsx'
import Github, { githubInfoLoader } from "../component/Github/Github.jsx"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='user/:userId' element={<User/>} />
      <Route loader={githubInfoLoader} path='github' element={<Github/>} />
    </Route>
    
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
