import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
          <div>Hello "__root"!</div>
          <div>
              <Link to="/">Home</Link>{" "}
              <Link to="/about">About</Link>{" "}
              <Link to="/products">Products</Link>
          </div>
          <Outlet />
          <TanStackRouterDevtools/>
    </React.Fragment>
  )
}
