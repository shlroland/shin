import { ArticleCarousel } from '~/components/ArticleCarousel'
import { ArticleList } from '~/components/ArticleList'
import { Aside } from '~/components/Aside'
import { CategoryMenu } from '~/components/CategoryMenu'
import { DoubleColumnLayout } from '~/components/Layout/DoubleColumnLayout'

export default function Index() {
  return (
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
  )
}
