import { Link } from 'remix'

import { ListTrail } from '~/components/Animation/Trail'
import { Aside } from '~/components/Aside'
import { DoubleColumnLayout } from '~/components/Layout/DoubleColumnLayout'

const Archives = () => {
  return (
    <DoubleColumnLayout asideNode={<Aside />}>
      <div className="bg-white box-shadow">
        <div className="py-4 text-center border border-solid border-color">
          <p className="first-of-type:mt-2">
            <span className="text-xl text-primary-500">归档</span>
          </p>
          <p>
            共计<span className="text-xl text-primary-500">44</span>篇
          </p>
        </div>
        <div className="px-5 py-4">
          <h2 className="text-2xl text-main-color">2022</h2>
          <div className="px-4 py-2">
            <h3 className="text-xl text-second-color">April</h3>
            <ul className="pl-10">
              <ListTrail
                length={1}
                options={{
                  opacity: 1,
                  height: 48,
                  x: 0,
                  from: { opacity: 0, height: 0, x: -20 },
                }}
                renderItem={() => {
                  return (
                    <Link
                      to="/article/[id]"
                      className="inline-block w-full truncate"
                    >
                      <span className="pr-4 m-0 text-sm text-second-color">
                        <time className="">04-12</time>
                      </span>
                      <span className="text-base font-semibold text-left truncate text-main-color">
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
