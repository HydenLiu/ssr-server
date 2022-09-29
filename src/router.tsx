import Home from './pages/Home'
import Demo from './pages/Demo'

interface IRouter {
  path: string
  element: JSX.Element
}

const router: IRouter[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/demo',
    element: <Demo />
  }
]

export default router

