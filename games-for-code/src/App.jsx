import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

import Homepage from './Homepage'

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
            { path: '/',          element: <Homepage /> }
        ]
    }
])



function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App