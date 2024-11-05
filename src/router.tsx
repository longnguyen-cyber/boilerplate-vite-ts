import { Navigate, useRoutes } from 'react-router-dom'

import { Toaster } from '@/components/ui/toaster'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'
import { PATHS } from '@/utils/enums'

export default function Router() {
  const Layout = () => {
    return (
      <div className='flex'>
        <Toaster />
      </div>
    )
  }

  const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const token = localStorage.getItem('token')

    if (!token) {
      return (
        <Navigate
          to='/login'
          replace
        />
      )
    }

    return children
  }

  const routerElements = useRoutes([
    {
      path: PATHS.HOME,
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },

    {
      path: '*',
      element: <NotFound />,
    },
  ])

  return routerElements
}
