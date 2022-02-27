import type { FC } from 'react'

import { ArticleCarousel } from '~/components/ArticleCarousel'
import { ArticleList } from '~/components/ArticleList'
import { ArticleRecommend } from '~/components/ArticleRecommend'
import { CategoryMenu } from '~/components/CategoryMenu'
import { DoubleColumnLayout } from '~/components/Layout/DoubleColumnLayout'

export default function Index() {
  return (
    <div className="flex flex-col h-full">
      <DoubleColumnLayout asideNode={<Aside />}>
        <div className="p-2 mb-4 bg-white rounded-sm shadow-md">
          <ArticleCarousel />
        </div>
        <div className="rounded-sm shadow-md">
          <header className="p-4 bg-white border-b border-solid rounded-t-sm border-slate-200">
            <CategoryMenu />
          </header>
          <main>
            <ArticleList />
          </main>
        </div>
      </DoubleColumnLayout>
    </div>
  )
}

const Aside: FC = () => {
  return (
    <div className="mt-4 aside-sticky ">
      <ArticleRecommend />
    </div>
  )
}
