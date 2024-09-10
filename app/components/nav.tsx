'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blog',
  },
}

export function Navbar() {
  const pathname = usePathname()

  return (
    <aside className="mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = pathname === path
              return (
                <Link
                  key={path}
                  href={path}
                  className={`
                    hover:text-black dark:hover:text-white
                    flex align-middle relative py-1 mr-6
                    ${isActive 
                      ? 'text-black dark:text-white' 
                      : 'text-neutral-600 dark:text-neutral-400'}
                  `}
                >
                  {name}
                  {isActive && (
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-neutral-800 dark:bg-neutral-200" />
                  )}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}