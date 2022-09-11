import { Link } from '@remix-run/react'
import type { FC } from 'react'
import { AiOutlineTranslation, AiOutlineSearch } from 'react-icons/ai'
import { BiSun } from 'react-icons/bi'

import logo from './logo2.svg'

const NAV_LINKS = [
  {
    path: '/',
    locale: 'article',
    name: '文章',
  },
  {
    path: '/archives',
    locale: 'archives',
    name: '归档',
  },
  {
    path: '/knowledge',
    locale: 'knowledgeBooks',
    name: '知识小册',
  },
]

const toolWrapper =
  'text-[24px] px-3 py-0 align-middle leading-[64px] flex justify-center items-center h-16 float-right'

export const Header: FC = () => {
  // const { pathname } = useLocation()
  const navMenu = NAV_LINKS.map(nav => (
    <li
      key={nav.path}
      className="inline-flex px-3 py-0 align-middle leading-[64px]"
    >
      <Link to={nav.path}>
        <span>{nav.name}</span>
      </Link>
    </li>
  ))
  return (
    <header className="trnasition relative h-[64px] w-full transition duration-300 ease-in-out">
      <div className="relative z-50 h-16 w-screen border-b border-solid border-slate-200 bg-white">
        <div className="container relative mx-auto flex items-center">
          <div className="mr-16 inline-flex h-16 items-center text-left leading-[64px] text-gray-800">
            <Link to="/" className="flex h-9 items-start">
              <img className="h-full" src={logo} alt="logo" />
            </Link>
          </div>
          <nav className="flex flex-grow items-center justify-between text-base text-gray-800">
            <ul className="relative w-full ">
              {navMenu}
              <li className={toolWrapper}>
                <AiOutlineSearch />
              </li>
              <li className={toolWrapper}>
                <BiSun />
              </li>
              <li className={toolWrapper}>
                <AiOutlineTranslation />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
