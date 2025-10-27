import { Navigate, useRoutes } from 'react-router-dom'
import Welcome from '@/views/welcome/index.tsx'
import Login from '@/views/login/Login.tsx'
import Error404 from '@/views/404.tsx'
import Error403 from '@/views/403.tsx'
import Layout from '@/layout/index.tsx'

const router = [
  {
    path: '/',
    element: <Navigate to={'/welcome'} />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    element: <Layout />,
    children: [
      {
        path: '/welcome',
        element: <Welcome />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to='/404' />
  },
  {
    path: '/404',
    element: <Error404 />
  },
  {
    path: '/403',
    element: <Error403 />
  }
]

export default function Router() {
  return useRoutes(router)
}
