import type { FC, ReactNode } from 'react'
import type { UseTrailProps } from 'react-spring'
import { animated, useTrail } from 'react-spring'

interface ListTrailProps {
  length: number
  options: UseTrailProps
  element?: keyof JSX.IntrinsicElements
  setItemContainerProps?: (index: number) => Record<string, unknown>
  renderItem: (index: number) => ReactNode
  className?: string
}

export const ListTrail: FC<ListTrailProps> = ({
  length,
  options,
  element = 'li',
  setItemContainerProps,
  renderItem,
  className,
}) => {
  const C = animated[element]
  const trail = useTrail(length, {
    config: { mass: 2, tension: 280, friction: 24, clamp: true },
    ...options,
  })

  return (
    <>
      {trail.map((style, index) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <C
            key={index}
            className={className}
            style={style}
            {...setItemContainerProps?.(index)}
          >
            {renderItem(index)}
          </C>
        )
      })}
    </>
  )
}
