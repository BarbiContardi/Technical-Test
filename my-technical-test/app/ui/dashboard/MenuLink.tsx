"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface Item {
  path: string;
  icon: React.ReactNode;
  title: string;
}

interface MenuLinkProps {
  item: Item;
}

const MenuLink: React.FC<MenuLinkProps> = ({ item }) => {
  const pathname = usePathname()

  return (
    <Link href={item.path} className={`p-5 flex items-center space-x-2.5 my-1.5 rounded-lg hover:bg-[#2e374a] active:bg-[#2e374a] ${pathname === item.path ? 'bg-[#2e374a]' : ''}`}>
      {item.icon}
      {item.title}
    </Link>
  )
}

export default MenuLink;
