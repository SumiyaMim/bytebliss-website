import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import Blogs from '../pages/Blogs'
import Bookmarks from '../pages/Bookmarks'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/blogs',
        element: <Blogs />,
      },
      {
        path: '/bookmarks',
        element: <Bookmarks />,
      },
    ],
  },
])
