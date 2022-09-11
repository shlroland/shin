import cx from 'classnames'
import { AiOutlineTag } from 'react-icons/ai'

import { Aside } from '~/components/Aside'
import { DoubleColumnLayout } from '~/components/Layout/DoubleColumnLayout'

export default function Article() {
  return (
    <DoubleColumnLayout asideNode={<Aside />}>
      <article className="second-bg radius box-shadow p-4">
        <div className="w-full ">
          <img
            alt="cover"
            src="https://wipi.oss-cn-shanghai.aliyuncs.com/2022-07-20/photo-1629461461750-ef5b81781bc2.avif"
            className="radius inline-block h-auto w-full"
          />
        </div>
        <div className="text-center ">
          <h1 className="text-main-color mt-3 text-center text-4xl font-bold leading-relaxed">
            欢迎使用 Shin
          </h1>
          <p className="text-second-color mb-4 text-center italic">
            <span>发布于 2022-09-01 12:00:00 </span>
            <span> • </span>
            <span>阅读量 233</span>
          </p>
        </div>
        <div className="my-0 -mx-2 text-xs">
          <div className="inline-block px-2 py-0">
            <div
              className={cx(
                'text-second-color border-color radius mt-2 inline-flex border border-solid px-2 py-0 text-sm no-underline',
                'hover:bg-primary-500 hover:text-white',
                'flex items-center gap-1',
                'cursor-pointer',
              )}
            >
              <AiOutlineTag /> Shin
            </div>
          </div>
        </div>
      </article>
    </DoubleColumnLayout>
  )
}
