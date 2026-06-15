import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

import Homepage from './Homepage'
import Header from './Header'
import Footer from './Footer'
import MemoryGame from './MemoryGame'
import Games from './Games'
import About from './About'
import NotFound from './NotFound'

function AppLayout() {

    return (
        <div className='all-content'>
            <Header /> 

            <div className="content">   
                <Outlet/>
            </div>
            
            <Footer />       
        </div>
    )
}


const router = createBrowserRouter([
    { 
        element: <AppLayout />,

        children: [
            { path: '/',          element: <Homepage /> },
            { path: '/memory',    element: <MemoryGame /> },
            { path: '/games',     element: <Games />},
            { path: '/about',     element: <About />},

            { path: '*', element: <NotFound />}
        ]
    }
])



function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App