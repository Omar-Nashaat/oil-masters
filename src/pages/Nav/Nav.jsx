import React, { useState } from 'react'
import logo from './imgs/logo.png'
import { Link } from 'react-router-dom'
import useIsMobile from '@/hooks/useIsMobile'

const Nav = () => {
  const { isMobile } = useIsMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev)
  }

  return (
    <>
      <div className='container'>
        <nav className=''>
          {isMobile ? (
            <div className='max-w-screen-xl flex flex-row items-center justify-between'>
              <div>
                <a
                  href='#'
                  className='flex items-center space-x-3 rtl:space-x-reverse'
                >
                  <img
                    src={logo}
                    className={isMobile ? 'h-16' : 'h-20'}
                    alt='Flowbite Logo'
                  />
                </a>
              </div>
              <div className='flex flex-row items-center gap-3'>
                <form class='flex items-center w-full'>
                  <label for='simple-search' class='sr-only'>
                    Search
                  </label>
                  <div class='relative w-full'>
                    <div class='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                      <i class='fa-solid fa-wrench'></i>
                    </div>
                    <input
                      type='text'
                      id='simple-search'
                      class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#F20705] focus:border-[#F20705] block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      placeholder='Search ...'
                      required
                    />
                  </div>
                  <button
                    type='submit'
                    class='p-2.5 ms-2 text-sm font-medium text-white bg-[#F20705] rounded-lg border border-[#F20705] hover:bg-[#F20705] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                  >
                    <svg
                      class='w-4 h-4'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 20 20'
                    >
                      <path
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                      />
                    </svg>
                    <span class='sr-only'>Search</span>
                  </button>
                </form>
                <div className='flex flex-row gap-2 cursor-pointer'>
                  <i className='fa-regular fa-heart text-[20px] cursor-pointer'></i>
                  <i class='fa-solid fa-cart-shopping text-[20px] cursor-pointer'></i>
                </div>
              </div>
            </div>
          ) : (
            <div className='max-w-screen-xl flex flex-row flex-wrap items-center justify-between'>
              <div>
                <a
                  href='#'
                  className='flex items-center space-x-3 rtl:space-x-reverse'
                >
                  <img
                    src={logo}
                    className={isMobile ? 'h-16' : 'h-20'}
                    alt='Flowbite Logo'
                  />
                </a>
              </div>
              <div className='flex flex-row items-center w-3/4 gap-11'>
                <form class='flex items-center w-full'>
                  <label for='simple-search' class='sr-only'>
                    Search
                  </label>
                  <div class='relative w-full'>
                    <div class='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                      {/* <svg
                  class='w-4 h-4 text-gray-500 dark:text-gray-400'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 18 20'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2'
                  />
                </svg> */}
                      <i class='fa-solid fa-wrench'></i>
                    </div>
                    <input
                      type='text'
                      id='simple-search'
                      class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#F20705] focus:border-[#F20705] block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      placeholder='Search by name...'
                      required
                    />
                  </div>
                  <button
                    type='submit'
                    class='p-2.5 ms-2 text-sm font-medium text-white bg-[#F20705] rounded-lg border border-[#F20705] hover:bg-[#F20705] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                  >
                    <svg
                      class='w-4 h-4'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 20 20'
                    >
                      <path
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                      />
                    </svg>
                    <span class='sr-only'>Search</span>
                  </button>
                </form>
                <div className='flex flex-row gap-3 cursor-pointer'>
                  <i className='fa-regular fa-heart text-[32px] cursor-pointer'></i>
                  <i class='fa-solid fa-cart-shopping text-[32px] cursor-pointer'></i>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
      <div className='bg-dark'>
        <div className='container'>
          <nav className=''>
            <div className='max-w-screen-xl flex flex-wrap items-center justify-between'>
              {/* Dropdown Menu */}
              <div className='relative py-2'>
                {' '}
                {/* Add relative positioning here */}
                <button
                  onClick={toggleDropdown}
                  className='flex items-center justify-between w-full py-2 px-3 text- rounded md:hover:bg-transparent md:border-0 md:hover:text-[#F20705] md:p-0 md:w-auto'
                >
                  <div className='flex flex-row justify-between items-center gap-10'>
                    <div className='flex flex-row justify-center items-center gap-3'>
                      <i class='fa-solid fa-bars text-white'></i>
                      <span className='text-white'>Browse Categories</span>
                    </div>
                    <i class='fa-solid fa-caret-down text-white'></i>
                  </div>
                </button>
                {/* Dropdown items */}
                <div
                  className={`absolute z-10 ${
                    isDropdownOpen ? 'block' : 'hidden'
                  } font-normal bg-white`}
                  id='dropdownNavbar'
                >
                  <ul
                    className='py-2 text-sm text-white-700 dark:text-gray-400'
                    aria-labelledby='dropdownLargeButton'
                  >
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        Oil
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        Parts
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        Accessories
                      </a>
                    </li>
                  </ul>
                  {/* <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </div> */}
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                type='button'
                className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                aria-controls='navbar-dropdown'
                aria-expanded={isMenuOpen ? 'true' : 'false'}
              >
                <span className='sr-only'>Open main menu</span>
                <svg
                  className='w-5 h-5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 17 14'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M1 1h15M1 7h15M1 13h15'
                  />
                </svg>
              </button>

              {/* Navbar Links */}
              <div
                className={`w-full md:block md:w-auto py-2 ${
                  isMenuOpen ? 'block' : 'hidden'
                }`}
                id='navbar-dropdown'
              >
                <ul className='flex flex-col font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
                  <li>
                    <a
                      href='#'
                      className='block py-2 px-3 text-white rounded hover:bg-black  md:hover:bg-transparent md:border-0 md:hover:text-[#FBD1D3] md:p-0 md:dark:hover:bg-transparent'
                    >
                      Home
                    </a>
                  </li>

                  <li>
                    <a
                      href='#'
                      className='block py-2 px-3 text-white rounded hover:bg-black md:hover:bg-transparent md:border-0 md:hover:text-[#FBD1D3] md:p-0 md:dark:hover:bg-transparent'
                    >
                      Shop
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='block py-2 px-3 text-white rounded hover:bg-black md:hover:bg-transparent md:border-0 md:hover:text-[#FBD1D3] md:p-0 md:dark:hover:bg-transparent'
                    >
                      Boxes
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='block py-2 px-3 text-white rounded hover:bg-black md:hover:bg-transparent md:border-0 md:hover:text-[#FBD1D3] md:p-0 md:dark:hover:bg-transparent'
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Nav
