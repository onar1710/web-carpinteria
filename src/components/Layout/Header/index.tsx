'use client'
import { navLinks } from '@/app/api/navlink'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { useEffect, useRef, useState, useCallback } from 'react'
import NavLink from './Navigation/NavLink'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const Header: React.FC = () => {
  const [sticky, setSticky] = useState(false)
  const [navbarOpen, setNavbarOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  const isDemo = process.env.NEXT_PUBLIC_DEMO_MODE === 'true'

  const sideMenuRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (sideMenuRef.current && !sideMenuRef.current.contains(event.target as Node)) {
      setNavbarOpen(false)
    }
  }

  const handleScroll = useCallback(() => {
    setSticky(window.scrollY >= 50)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleScroll])

  const isHomepage = pathname === '/'

  const navClassName = sticky
    ? 'shadow-lg bg-black rounded-none top-0 px-4'
    : 'shadow-none bg-black rounded-full top-0 px-4'

  const textClassName = sticky
    ? 'text-white'
    : 'text-white'

  return (
    <header className='fixed h-24 py-1 z-50 w-full bg-transparent transition-all duration-300 lg:px-0 px-4 top-0'>
      <nav className={`container mx-auto max-w-8xl flex items-center justify-between h-full py-4 duration-300 ${navClassName}`}>
        <div className='flex justify-between items-center gap-2 w-full'>
          <div>
            <Link href='/'>
              <Image
                src={'/images/header/logo-ferrar.cucina.png'}
                alt='logo'
                width={150}
                height={68}
                unoptimized={true}
                className='block object-contain'
              />
            </Link>
          </div>
          <div className='flex items-center gap-2 sm:gap-6'>
            <button
              className='hover:cursor-pointer'
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <Icon
                icon={'solar:sun-bold'}
                width={32}
                height={32}
                className={`dark:hidden block ${textClassName}`}
              />
              <Icon
                icon={'solar:moon-bold'}
                width={32}
                height={32}
                className={`dark:block hidden ${sticky ? 'text-white' : isHomepage ? 'text-white' : 'text-white'}`}
              />
            </button>
            <div className={`hidden md:block`}>
              <Link href='tel:3144503020' className={`text-base flex items-center gap-2 border-r pr-6 hover:text-primary ${sticky ? 'text-white border-white/20' : isHomepage ? 'text-white border-white/20' : 'text-dark dark:text-white border-dark/20 dark:border-white/20'}`}>
                <Icon icon={'ph:phone-bold'} width={24} height={24} />
                3144503020 / 3132814638
              </Link>
            </div>
            <div>
              <button
                onClick={() => {
                  if (isDemo) return
                  setNavbarOpen(!navbarOpen)
                }}
                disabled={isDemo}
                className={`flex items-center gap-3 p-2 sm:px-5 sm:py-3 rounded-full font-semibold border duration-300 ${isDemo ? 'opacity-60 cursor-not-allowed' : 'hover:cursor-pointer'} ${sticky ? 'bg-white text-black border-white/20 hover:bg-primary hover:text-white' : isHomepage ? 'bg-white text-black border-white hover:bg-transparent hover:text-white' : 'bg-black text-white border-black hover:bg-primary hover:text-white'}`}
                aria-label='Toggle mobile menu'>
                <span>
                  <Icon icon={'ph:list'} width={24} height={24} />
                </span>
                <span className='hidden sm:block'>Menu</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {!isDemo && (
        <>
          {
            navbarOpen && (
              <div className='fixed top-0 left-0 w-full h-full bg-black/50 z-40' />
            )
          }

          <div
            ref={sideMenuRef}
            className={`fixed top-0 right-0 h-full w-full bg-dark shadow-lg transition-transform duration-300 max-w-2xl ${navbarOpen ? 'translate-x-0' : 'translate-x-full'} z-50 px-20 overflow-auto no-scrollbar`}
          >
            <div className="flex flex-col h-full justify-between">
              <div className="">
                <div className='flex items-center justify-start py-10'>
                  <button
                    onClick={() => setNavbarOpen(false)}
                    aria-label='Close mobile menu'
                    className='bg-white p-3 rounded-full hover:cursor-pointer'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'>
                      <path
                        fill='none'
                        stroke='black'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </button>
                </div>
                <nav className='flex flex-col items-start gap-4'>
                  <ul className='w-full'>
                    {navLinks.map((item, index) => (
                      <NavLink key={index} item={item} onClick={() => setNavbarOpen(false)} />
                    ))}
                    <li className='flex items-center gap-4'>
                      <Link href="/signin" className='py-4 px-8 bg-primary text-base leading-4 block w-fit text-white rounded-full border border-primary font-semibold mt-3 hover:bg-transparent hover:text-primary duration-300'>
                        Sign In
                      </Link>
                      <Link href="/" className='py-4 px-8 bg-transparent border border-primary text-base leading-4 block w-fit text-primary rounded-full font-semibold mt-3 hover:bg-primary hover:text-white duration-300'>
                        Sign up
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className='flex flex-col gap-1 my-16 text-white'>
                <p className='text-base sm:text-xm font-normal text-white/40'>
                  Contact
                </p>
                <Link href="https://www.instagram.com/ferrary.cucina" target="_blank" className='text-base sm:text-xm font-medium text-inherit hover:text-primary'>
                  Instagram: @ferrary.cucina
                </Link>
                <Link href="tel:3144503020" className='text-base sm:text-xm font-medium text-inherit hover:text-primary'>
                  3144503020 / 3132814638
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </header >
  )
}

export default Header
