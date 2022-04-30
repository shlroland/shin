import cls from 'classnames'
import type { FC, PropsWithChildren, ReactNode } from 'react'

interface DoubleColumnLayoutProps {
  className?: string
  childrenClassName?: string
  asideNode?: ReactNode
  asideClassName?: string
}

export const DoubleColumnLayout: FC<
  PropsWithChildren<DoubleColumnLayoutProps>
> = ({ className, children, childrenClassName, asideNode, asideClassName }) => {
  return (
    <div className={cls('container mx-auto', className)}>
      <div className="flex flex-wrap justify-center">
        <section
          className={cls(
            'flex-grow pt-4 pb-8 w-[calc(100%-20rem-1rem)]',
            childrenClassName,
          )}
        >
          {children}
        </section>
        <aside className={cls('ml-4 w-72 mx-4', asideClassName)}>
          {asideNode}
        </aside>
      </div>
    </div>
  )
}
