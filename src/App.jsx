import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import LayOut from './pages/LayOut/LayOut'

const routes = createBrowserRouter([
  {
    path: '', element: <LayOut />, children: [
      { path: '', element: <Home /> },
      { path: 'home', element: <Home /> },
    ]
  },
])

function App() {

  return <RouterProvider router={routes}>

  </RouterProvider>
}

export default App
