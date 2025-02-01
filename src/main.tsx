
import { createRoot } from 'react-dom/client'
import './index.css'

import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import { HomeLayout } from './pages'


const router = createBrowserRouter([
  {path : '/' , element:<HomeLayout/> , children:[
    {
    index :true,
    element: <Landing/>
    },
    {
    path :"news",
    element: <News/>
    },
    {
    path :"webb",
    element: <Webb/>
    },
    {
    path :"spacex",
    element: <SpaceX/>
    },
    {
    path :"hubble",
    element: <Hubble/>
    },
    {
    path :"appod",
    element: <Appod/>
    },

]}
])

createRoot(document.getElementById('root')!).render(

    <RouterProvider router={router}/>

)
