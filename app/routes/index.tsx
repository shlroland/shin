import type { FC } from 'react'

import { ArticleRecommend } from '~/components/ArticleRecommend'
import { DoubleColumnLayout } from '~/components/Layout/DoubleColumnLayout'

export default function Index() {
  return (
    <div className="flex flex-col h-full">
      <DoubleColumnLayout asideNode={<Aside />}>
        <div className="p-2 mb-4 bg-white rounded-sm shadow-md">Carousel</div>
        <div className="rounded-sm shadow-md">
          <header className="p-4 bg-white border-b border-solid rounded-t-sm border-slate-200">
            category
          </header>
          <main className="mb-16 aside-sticky">scroll</main>
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
