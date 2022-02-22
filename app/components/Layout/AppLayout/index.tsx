import type { PropsWithChildren } from 'react'

import { Header } from '~/components/Header'

export default function AppLayout({
  children,
}: PropsWithChildren<Record<string, any>>) {
  return (
    <div className="h-screen min-h-screen">
      <Header />
      <main className="relative z-[1] min-h-[calc(100%-64px)] bg-slate-100">
        {children}
      </main>
    </div>
  )
}
