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
        <>  
            <Header />    
            <Outlet/>
            <Footer />       
        </>
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