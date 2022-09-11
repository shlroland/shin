import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import type { LinksFunction, MetaFunction } from '@remix-run/server-runtime'
import type { FC, PropsWithChildren } from 'react'

import AppLayout from './components/Layout/AppLayout'
import twStyles from './tailwind.css'
import type { AnyObject } from './utils/type'

export const meta: MetaFunction = () => {
  return { title: 'New Remix App' }
}

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: twStyles }]
}

const Document: FC<PropsWithChildren<AnyObject>> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}

export default function App() {
  return (
    <Document>
      <AppLayout>
        <Outlet />
      </AppLayout>
    </Document>
  )
}
