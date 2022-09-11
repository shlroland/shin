import { Link } from '@remix-run/react'

export const CategoryMenu = () => {
  return (
    <>
      <Link to="/" className="px-3 text-primary-500 first-of-type:pl-0">
        所有
      </Link>
      <Link to="/">前端</Link>
    </>
  )
}
