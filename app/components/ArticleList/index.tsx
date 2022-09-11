import { Link } from '@remix-run/react'
import { AiOutlineHeart, AiOutlineEye, AiOutlineShareAlt } from 'react-icons/ai'

import { Divider } from '../Divider'

export const ArticleList = () => {
  return (
    <div className="second-bg w-full overflow-hidden rounded-t-sm p-4">
      <div className="relative after:absolute after:-bottom-4 after:h-[1px] after:w-full after:bg-slate-200 after:content-[''] last-of-type:after:h-0">
        <Link to="/" aria-label="sdkjfhskdf">
          <header className="flex items-center">
            <div className="truncate text-base font-semibold ">
              初探在线文档，开发在线知识库
            </div>
            <div className="text-light-color text-sm">
              <Divider type="vertical" />
              <span>6天前</span>
            </div>
          </header>
          <main className="flex pt-3">
            <div className="flex flex-auto flex-col justify-between">
              <div className="text-main-color max-w-full text-sm leading-6 line-clamp-3">
                老生常谈的性能优化，在微信小程序中又应该如何去实践？
              </div>
              <div className="text-second-color mt-3 w-full text-sm">
                <span className="inline-flex items-center">
                  <AiOutlineHeart className="inline-block text-base" />
                  <span className="ml-1.5">63</span>
                  <span className="mx-2 ">·</span>
                </span>
                <span className="inline-flex items-center">
                  <AiOutlineEye className="inline-block text-base" />
                  <span className="ml-1.5">563</span>
                  <span className="mx-2 ">·</span>
                </span>
                <span className="inline-flex items-center">
                  <AiOutlineShareAlt className="inline-block text-base" />
                  <span className="ml-1.5">分享</span>
                </span>
              </div>
            </div>
            <div className="radius relative ml-6 flex max-h-24 min-h-[80px] w-[120px] flex-shrink-0 flex-grow-0 basis-auto overflow-hidden">
              <img
                src="https://wipi.oss-cn-shanghai.aliyuncs.com/2022-02-23/online-document.jpeg"
                alt="cover"
                className="absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </main>
        </Link>
      </div>
    </div>
  )
}
