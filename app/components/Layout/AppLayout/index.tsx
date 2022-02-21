import type { PropsWithChildren } from 'react'

export default function AppLayout({
  children,
}: PropsWithChildren<Record<string, never>>) {
  return (
    <div className="h-screen min-h-screen">
      <main className="relative z-[1] min-h-[calc(100%-64px)] bg-slate-100">
        {children}
      </main>
    </div>
  )
}
