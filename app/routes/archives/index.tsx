import { Link } from 'remix'

import { ListTrail } from '~/components/Animation/Trail'
import { Aside } from '~/components/Aside'
import { DoubleColumnLayout } from '~/components/Layout/DoubleColumnLayout'

const Archives = () => {
  return (
    <DoubleColumnLayout asideNode={<Aside />}>
      <div className="box-shadow bg-white">
        <div className="border-color border border-solid py-4 text-center">
          <p className="first-of-type:mt-2">
            <span className="text-xl text-primary-500">归档</span>
          </p>
          <p>
            共计<span className="text-xl text-primary-500">44</span>篇
          </p>
        </div>
        <div className="px-5 py-4">
          <h2 className="text-main-color text-2xl">2022</h2>
          <div className="px-4 py-2">
            <h3 className="text-second-color text-xl">April</h3>
            <ul className="pl-10">
              <ListTrail
                className="relative flex items-center before:absolute before:top-4 before:-left-4 before:h-[6px] before:w-[6px] before:rounded-full before:bg-gray-300 before:content-['']"
                length={1}
                options={{
                  opacity: 1,
                  height: 36,
                  x: 0,
                  from: { opacity: 0, height: 0, x: -20 },
                }}
                renderItem={() => {
                  return (
                    <Link to="/article/[id]" className="inline-block truncate ">
                      <span className="text-second-color m-0 pr-4 text-sm">
                        <time className="">04-12</time>
                      </span>
                      <span className="text-main-color truncate text-left text-base font-semibold">
                        数据可视化
                      </span>
                    </Link>
                  )
                }}
              />
            </ul>
          </div>
        </div>
      </div>
    </DoubleColumnLayout>
  )
}

export default Archives
