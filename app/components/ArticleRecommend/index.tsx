export const ArticleRecommend = () => {
  return (
    <div className="mb-6 overflow-hidden text-sm leading-tight main-bg radius box-shadow">
      <div className="p-4 font-bold border-b border-solid border-color">
        <span>推荐阅读</span>
      </div>
      <ul className="px-4 pt-0 pb-4">
        <li className="flex flex-wrap items-stretch pt-4 text-gray-700">
          <a className="truncate " href="/">
            <span>学习TS类型体操</span>
            {' · '}
            <span>九个月前</span>
          </a>
        </li>
      </ul>
    </div>
  )
}
