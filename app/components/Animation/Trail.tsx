import { FC, ReactNode } from 'react'
import { animated, useTrail, UseTrailProps } from 'react-spring'

interface ListTrailProps {
  length: number
  options: UseTrailProps
  element?: keyof JSX.IntrinsicElements
  setItemContainerProps?: (index: number) => Record<string, unknown>
  renderItem: (index: number) => ReactNode
}

export const ListTrail: FC<ListTrailProps> = ({
  length,
  options,
  element = 'li',
  setItemContainerProps,
  renderItem,
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
          <C key={index} style={style} {...setItemContainerProps?.(index)}>
            {renderItem(index)}
          </C>
        )
      })}
    </>
  )
}
