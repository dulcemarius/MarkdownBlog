'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'

const navItems = [
  { path: '/', name: 'home' },
  { path: '/blog', name: 'blog' },
]

const NavLink = ({ path, name, isActive }) => (
  <Link
    href={path}
    className={`
      hover:text-black dark:hover:text-white
      flex align-middle relative pb-2 mr-8
      transition-colors duration-200 ease-in-out
      ${isActive 
        ? 'text-black dark:text-white' 
        : 'text-neutral-600 dark:text-neutral-400'}
    `}
  >
    {name}
    {isActive && (
      <motion.span
        className="absolute left-0 right-0 bottom-0 h-0.5 bg-black dark:bg-white"
        layoutId="underline"
        transition={{ type: "tween", duration: 0.2 }}
      />
    )}
  </Link>
)

export function Navbar() {
  const pathname = usePathname()

  return (
    <aside className="mb-16 tracking-tight">
      <nav className="lg:sticky lg:top-20 flex flex-row items-start relative fade md:overflow-auto scroll-pr-6">
        <div className="flex flex-row">
          {navItems.map(({ path, name }) => (
            <NavLink key={path} path={path} name={name} isActive={pathname === path} />
          ))}
        </div>
      </nav>
    </aside>
  )
}