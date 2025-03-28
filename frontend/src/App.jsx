
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/ui/shared/Navbar'
import Login from './components/auth/login'
import Singup from './components/auth/singup'
import Home from './components/Home'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'


const appRouter= createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/singup',
    element:<Singup/>
  },
  {
    path:'/jobs',
    element:<Jobs/>
  },
  {
    path:'/description/:id',
    element:<JobDescription/>
  },
  {
    path:'/browse',
    element:<Browse/>
  },
  {
    path:'/profile',
    element:<Profile/>
  }
])

function App() {

  return (
    <>
      <div>
      <RouterProvider router ={appRouter}/>
      </div>
    </>
  )
}

export default App
