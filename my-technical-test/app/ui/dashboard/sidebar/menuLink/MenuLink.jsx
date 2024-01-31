"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const MenuLink = ({item}) => {

  const pathname = usePathname()

  return (
    <Link href={item.path} className={clsx(
      'p-5 flex items-center space-x-2.5 my-1.5 rounded-lg hover:bg-[var(--hoverBg)] active:bg-[var(--hoverBg)]',
      { 'bg-[var(--hoverBg)]': pathname === item.path }
    )}>
      {item.icon}
      {item.title}
    </Link>
  )
}

export default MenuLink