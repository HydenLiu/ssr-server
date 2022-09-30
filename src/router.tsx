import Home from './pages/Home'
import Demo from './pages/Demo'

interface IRouter {
  path: string
  element: JSX.Element
  loadData?: (store: any) => any
}

const router: IRouter[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/demo',
    element: <Demo />,
    loadData: Demo.getInitProps
  }
]

export default router

