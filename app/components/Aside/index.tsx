import type { FC } from 'react'

import { ArticleRecommend } from '../ArticleRecommend'

export const Aside: FC = () => {
  return (
    <div className="aside-sticky mt-4 ">
      <ArticleRecommend />
    </div>
  )
}
