import Home from '../pages/Home/index'
import HeroSection  from '../pages/Home/Hero'

export const ROUTE = [
  {
    path: "/",
    element: <Home/>,
    children:[
      {
        path:"/",
        element:<HeroSection/>
      }
      
      
    ]
  }
]
