import cls from 'classnames'
import type { FC, ReactNode } from 'react'

interface DoubleColmnLayoutProps {
  className?: string
  childrenClassName?: string
  asideNode?: ReactNode
  asideClassName?: string
}

export const DoubleColumnLayout: FC<DoubleColmnLayoutProps> = ({
  className,
  children,
  childrenClassName,
  asideNode,
  asideClassName,
}) => {
  return (
    <div className={cls('min-h-screen', className)}>
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          <section
            className={cls(
              'flex-grow pt-4 pb-8 w-[calc(100%-20rem-1rem)]',
              childrenClassName,
            )}
          >
            {children}
          </section>
          <aside className={cls('ml-4 w-[18px] mx-4', asideClassName)}>
            {asideNode}
          </aside>
        </div>
      </div>
    </div>
  )
}
