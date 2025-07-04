import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Route as aboutRoute } from './about'

export const Route = createRootRoute({
  component: () => (
    <>
      <div>
        <Link to="/" >
          Home
        </Link>{' '}
        <Link to={aboutRoute.to}>
          About
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})