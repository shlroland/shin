import { FC } from 'react'
import { ArticleRecommend } from '../ArticleRecommend'

export const Aside: FC = () => {
  return (
    <div className="mt-4 aside-sticky ">
      <ArticleRecommend />
    </div>
  )
}
