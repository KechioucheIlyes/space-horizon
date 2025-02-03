
import { createRoot } from 'react-dom/client'
import './index.css'

import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import { Appod, HomeLayout, Hubble, Landing, News, SpaceX, Webb } from './pages'
import { newsPageLoader } from './pages/News'
import { ErrorElement } from './components'
import { hubblePageLoader } from './pages/Hubble'
import { appodPageLoader } from './pages/Appod'
import { webbPageLoader } from './pages/Webb'
import { spaceXPageLoader } from './pages/SpaceX'
import { landingPageLoader } from './pages/Landing'



const router = createBrowserRouter([
  {path : '/' , element:<HomeLayout/> , children:[
    {
    index :true,
    element: <Landing/>,
    loader: landingPageLoader,
    errorElement : <ErrorElement/>
    },
    {
    path :"news",
    element: <News/>,
    loader: newsPageLoader,
    errorElement : <ErrorElement/>
    },
    {
    path :"webb",
    element: <Webb/>, 
    loader : webbPageLoader, 
    errorElement : <ErrorElement/>
    },
    {
    path :"spacex",
    element: <SpaceX/>,
    loader : spaceXPageLoader, 
    errorElement : <ErrorElement/>
    },
    {
    path :"hubble",
    element: <Hubble/>,
    loader : hubblePageLoader,
    errorElement : <ErrorElement/>
    },
    {
    path :"appod",
    element: <Appod/>,
    loader : appodPageLoader,
    errorElement : <ErrorElement/>
    },

]}
])

createRoot(document.getElementById('root')!).render(

    <RouterProvider router={router}/>

)
