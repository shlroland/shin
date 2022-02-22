import type { FC } from 'react'
import { Link, useLocation } from 'remix'

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

export const Header: FC = () => {
  const { pathname } = useLocation()
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
    <header className="relative w-full h-[64px] transition trnasition ease-in-out duration-300">
      <div className="relative z-50 w-screen h-16 bg-white border-b border-solid border-slate-200">
        <div className="container relative flex items-center mx-auto">
          <div className="inline-flex items-center h-16 mr-16 text-gray-800 leading-[64px] text-left">
            <Link to="/" className="flex items-start h-9">
              <img className="h-full" src={logo} alt="logo" />
            </Link>
          </div>
          <nav className="flex items-center justify-between flex-grow text-base text-gray-800">
            <ul className="relative w-full">{navMenu}</ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
