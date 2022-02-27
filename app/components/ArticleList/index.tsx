import { AiOutlineHeart, AiOutlineEye, AiOutlineShareAlt } from 'react-icons/ai'
import { Link } from 'remix'

import { Divider } from '../Divider'

export const ArticleList = () => {
  return (
    <div className="w-full p-4 overflow-hidden rounded-t-sm second-bg">
      <div className="relative last-of-type:after:h-0 after:content-[''] after:absolute after:-bottom-4 after:w-full after:h-[1px] after:bg-slate-200">
        <Link to="/" aria-label="sdkjfhskdf">
          <header className="flex items-center">
            <div className="text-base font-semibold truncate ">
              初探在线文档，开发在线知识库
            </div>
            <div className="text-sm text-light-color">
              <Divider type="vertical" />
              <span>6天前</span>
            </div>
          </header>
          <main className="flex pt-3">
            <div className="flex flex-col justify-between flex-auto">
              <div className="max-w-full text-sm leading-6 line-clamp-3 text-main-color">
                老生常谈的性能优化，在微信小程序中又应该如何去实践？
              </div>
              <div className="w-full mt-3 text-sm text-second-color">
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
            <div className="relative flex flex-grow-0 flex-shrink-0 basis-auto w-[120px] max-h-24 min-h-[80px] ml-6 radius overflow-hidden">
              <img
                src="https://wipi.oss-cn-shanghai.aliyuncs.com/2022-02-23/online-document.jpeg"
                alt="cover"
                className="absolute w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              />
            </div>
          </main>
        </Link>
      </div>
    </div>
  )
}
