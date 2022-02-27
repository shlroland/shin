import cls from 'classnames'
import type { FC } from 'react'

export const Divider: FC<{
  type?: 'vertical' | 'horizontal'
}> = ({ type }) => {
  return (
    <div
      className={cls(
        'box-border m-0 p-0 text-black text-[14px] tabular-nums leading-[1.5715] list-none border-t-black/[0.06]',
        {
          'relative top-[-0.06em] inline-block h-[0.9em] my-0 mx-2 align-middle border-t-0 border-l border-solid border-black/[0.06]':
            type === 'vertical',
        },
      )}
    />
  )
}
