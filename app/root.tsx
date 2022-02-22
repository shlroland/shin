import type { FC } from 'react'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix'
import type { MetaFunction, LinksFunction } from 'remix'

import AppLayout from './components/Layout/AppLayout'
import globalStyles from './styles/app.css'
import twStyles from './tailwind.css'

export const meta: MetaFunction = () => {
  return { title: 'New Remix App' }
}

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: twStyles },
    { rel: 'stylesheet', href: globalStyles },
  ]
}

const Document: FC = ({ children }) => {
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
