import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

import Homepage from './Homepage'
import MemoryGame from './MemoryGame'

function AppLayout() {

    return (
        <>      
            <Outlet/>       
        </>
    )
}


const router = createBrowserRouter([
    { 
        element: <AppLayout />,

        children: [
            { path: '/',          element: <Homepage /> },
            { path: '/memory',          element: <MemoryGame /> }
        ]
    }
])



function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App