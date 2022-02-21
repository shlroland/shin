import cls from 'classnames'
import type { FC } from 'react'
import { Link, useLocation } from 'remix'

import styles from './index.module.scss'

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
      className={cls({ [styles.active]: pathname === nav.path })}
    >
      <Link to={nav.path}>
        <span>{nav.name}</span>
      </Link>
    </li>
  ))
  return <header />
}
