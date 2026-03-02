import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '../Layout'
import HomeView from './views/HomeView'
import MyPlantsView from './views/MyPlantsView'
import AboutView from './views/AboutView'
import PlantView from './views/PlantView'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeView />
      },
      {
        path: '/myplants',
        element: <MyPlantsView />
      },
      {
        path: '/about',
        element: <AboutView />
      },
      {
        path: '/plant/:id/:local',
        element: <PlantView />
      },
    ]
  }
], {
  // /flowerplant fot Github pages
  basename: "/flowerPlant"
})

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
