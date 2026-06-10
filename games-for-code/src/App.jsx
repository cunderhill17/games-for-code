import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

import Homepage from './Homepage'
import Header from './Header'
import Footer from './Footer'
import MemoryGame from './MemoryGame'
import Games from './Games'

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
            { path: '/games',     element: <Games />}
        ]
    }
])



function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App