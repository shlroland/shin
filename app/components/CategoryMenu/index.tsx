import { Link } from 'remix'

export const CategoryMenu = () => {
  return (
    <>
      <Link to={'/'} className="px-3 first-of-type:pl-0 text-primary-500">
        所有
      </Link>
      <Link to={'/'}>前端</Link>
    </>
  )
}
