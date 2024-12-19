import React, { useState } from 'react'
import service5 from './imgs/service5.jpg'
import product1 from './imgs/1.jpg'
import product2 from './imgs/2.jpg'
import product3 from './imgs/3.jpg'
import product4 from './imgs/4.jpg'
import slide1 from './imgs/slide1.jpg'
import slide2 from './imgs/slide2.jpg'
import slide3 from './imgs/slide3.jpg'
import slide4 from './imgs/slide4.jpg'
import slide5 from './imgs/slide5.jpg'
import side1 from './imgs/product1.jpg'
import side2 from './imgs/product2.jpg'
import side3 from './imgs/product3.jpg'
import cover1 from './imgs/cover1.jpg'
import cover2 from './imgs/cover2.jpg'
import cover3 from './imgs/cover3.jpg'
import style from './home.module.css'
import useIsMobile from '@/hooks/useIsMobile'
import Slider from 'react-slick'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Field, Label, Switch } from '@headlessui/react'

const Home = () => {
  const [agreed, setAgreed] = useState(false)
  const { isMobile } = useIsMobile()
  var settings = {
    speed: 700,
    initialSlide: 0,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 1000
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          autoplay: true,
          autoplaySpeed: 1000
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1000
        }
      }
    ]
  }
  return (
    <div className='bg-[#F7F7F7]'>
      {/* start main-screen */}
      <div className=''>
        {isMobile ? (
          <div className={style.firstSection + ' row p-5 gap-3 text-white'}>
            <div className={style.shadowOverlay}></div>
            <div className='col-md-7'>
              <div className='flex flex-col gap-5'>
                <h2 className='text-[50px] font-extrabold'>
                  Professional car repair and maintenance
                </h2>
                <h5 className='text-[22px]'>
                  We are focused on providing our clients with the highest level
                  of quality and excellent customer support.
                </h5>
                <div>
                  <button className='bg-danger px-5 py-3 text-white rounded-lg font-bold text-xl shadow-lg hover:shadow-2xl'>
                    BROWSE PRODUCTS
                  </button>
                </div>
              </div>
            </div>
            <div className='col-md-4'></div>
          </div>
        ) : (
          <div className={style.mainContainer}>
            <img
              src={service5}
              alt='background image'
              className={style.mainImage}
            />
            <div className={style.shadowLayer}></div>
            <div className={style.mainContent}>
              <div className='col-md-7'>
                <div className='flex flex-col gap-5 mt-5'>
                  <h2 className='text-[50px] font-extrabold'>
                    Professional car repair and maintenance
                  </h2>
                  <h5 className='text-[22px]'>
                    We are focused on providing our clients with the highest
                    level of quality and excellent customer support.
                  </h5>
                  <div>
                    <button className='bg-danger px-5 py-3 text-white rounded-lg font-bold text-xl shadow-lg hover:shadow-2xl'>
                      BROWSE PRODUCTS
                    </button>
                  </div>
                </div>
              </div>
              <div className='col-md-3'></div>
            </div>
          </div>
        )}
      </div>
      {/* end main-screen */}

      {/* start new */}
      <div className='container pb-5'>
        <div className='flex flex-row justify-between items-center'>
          {isMobile ? (
            <div className='flex flex-row items-center justify-start gap-2 my-12'>
              <h2 className='text-[28px]'>
                <span className='font-bold'>NEW</span> ARRIVALS
              </h2>
            </div>
          ) : (
            <div className='flex flex-row items-center justify-start gap-3 my-12'>
              <div className='w-9 h-1 bg-[#DC3545]'></div>
              <h2 className='text-[41px]'>
                <span className='font-bold'>NEW</span> ARRIVALS
              </h2>
            </div>
          )}
          <div>
            {isMobile ? (
              <button className='bg-[#DC3545] px-2 py-1 text-white text-md rounded-sm'>
                View All
              </button>
            ) : (
              <button className='bg-[#DC3545] px-3 py-1 text-white text-xl rounded-sm'>
                View All
              </button>
            )}
          </div>
        </div>
        <div className='row bg-white p-3'>
          <div className={style.productCard + ' col-md-3'}>
            <div className='row mb-2 p-2 group hover:transform hover:scale-105 transition-transform duration-700'>
              <div className='col-md-10'>
                <div className='flex flex-col items-start'>
                  <img src={product1} className='w-full h-64' />
                  <span className='font-normal'>
                    Kodak PIXPRO Astro Zoom AZ4221 16 MP 2
                  </span>
                  <div>
                    <div class='flex items-center my-1'>
                      <svg
                        class='w-4 h-4 text-yellow-300 ms-1'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 22 20'
                      >
                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                      </svg>
                      <svg
                        class='w-4 h-4 text-yellow-300 ms-1'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 22 20'
                      >
                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                      </svg>
                      <svg
                        class='w-4 h-4 text-yellow-300 ms-1'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 22 20'
                      >
                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                      </svg>
                      <svg
                        class='w-4 h-4 text-yellow-300 ms-1'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 22 20'
                      >
                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                      </svg>
                      <svg
                        class='w-4 h-4 ms-1 text-gray-300 dark:text-gray-500'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 22 20'
                      >
                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                      </svg>
                    </div>
                  </div>
                  <span className='text-[#EA1B25] font-bold text-lg'>
                    100 EGP
                  </span>
                </div>
              </div>
              <div className={style.productLayer + ' col-md-2'}>
                {isMobile ? (
                  <div className='flex flex-row items-center justify-center gap-3 mt-2'>
                    <div className='bg-[#D2D2D2] p-3 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#EA1B25] hover:text-white transition-all duration-300'>
                      <i className='fa-regular fa-heart text-md'></i>
                    </div>
                    <div className='bg-[#D2D2D2] p-3 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#EA1B25] hover:text-white transition-all duration-300'>
                      <i className='fa-solid fa-cart-plus text-md'></i>
                    </div>
                  </div>
                ) : (
                  <div className='flex flex-col items-center gap-52 mt-3'>
                    <div className='bg-[#D2D2D2] p-3 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#EA1B25] hover:text-white transition-all duration-300'>
                      <i className='fa-regular fa-heart text-md'></i>
                    </div>
                    <div className='bg-[#D2D2D2] p-3 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#EA1B25] hover:text-white transition-all duration-300'>
                      <i className='fa-solid fa-cart-plus text-md'></i>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={style.productCard + ' col-md-3'}>
            <div className='row mb-2 p-2 group hover:transform hover:scale-105 transition-transform duration-700'>
              <div className='col-md-10'>
                <div className='flex flex-col items-start'>
                  <img src={product2} className='w-full h-64' />
                  <span className='font-normal'>
                    Kodak PIXPRO Astro Zoom AZ4221 16 MP 2
                  </span>
                  <div>
                    <div class='flex items-center my-1'>
                      <svg
                        class='w-4 h-4 text-yellow-300 ms-1'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 22 20'
                      >
                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                      </svg>
                      <svg
                        class='w-4 h-4 text-yellow-300 ms-1'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 22 20'
                      >
                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                      </svg>
                      <svg
                        class='w-4 h-4 text-yellow-300 ms-1'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 22 20'
                      >
                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                      </svg>
                      <svg
                        class='w-4 h-4 text-yellow-300 ms-1'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 22 20'
                      >
                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                      </svg>
                      <svg
                        class='w-4 h-4 ms-1 text-gray-300 dark:text-gray-500'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 22 20'
                      >
                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                      </svg>
                    </div>
                  </div>
                  <span className='text-[#EA1B25] font-bold text-lg'>
                    100 EGP
                  </span>
                </div>
              </div>
              <div className={style.productLayer + ' col-md-2'}>
                {isMobile ? (
                  <div className='flex flex-row items-center justify-center gap-3 mt-2'>
                    <div className='bg-[#D2D2D2] p-3 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#EA1B25] hover:text-white transition-all duration-300'>
                      <i className='fa-regular fa-heart text-md'></i>
                    </div>
                    <div className='bg-[#D2D2D2] p-3 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#EA1B25] hover:text-white transition-all duration-300'>
                      <i className='fa-solid fa-cart-plus text-md'></i>
                    </div>
                  </div>
                ) : (
                  <div className='flex flex-col items-center gap-52 mt-3'>
                    <div className='bg-[#D2D2D2] p-3 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#EA1B25] hover:text-white transition-all duration-300'>
                      <i className='fa-regular fa-heart text-md'></i>
                    </div>
                    <div className='bg-[#D2D2D2] p-3 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#EA1B25] hover:text-white transition-all duration-300'>
                      <i className='fa-solid fa-cart-plus text-md'></i>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={style.productCard + ' col-md-3'}>
            <div className='row mb-2 p-2 group hover:transform hover:scale-105 transition-transform duration-700'>
              <div className='col-md-10'>
                <div className='flex flex-col items-start'>
                  <img src={product3} className='w-full h-64' />
                  <span className='font-normal'>
                    Kodak PIXPRO Astro Zoom AZ4221 16 MP 2
                  </span>
                  <div>
                    <div class='flex items-center my-1'>
                      <svg
                        class='w-4 h-4 text-yellow-300 ms-1'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 22 20'
                      >
                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                      </svg>
                      <svg
                        class='w-4 h-4 text-yellow-300 ms-1'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 22 20'
                      >
                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                      </svg>
                      <svg
                        class='w-4 h-4 text-yellow-300 ms-1'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 22 20'
                      >
                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                      </svg>
                      <svg
                        class='w-4 h-4 text-yellow-300 ms-1'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 22 20'
                      >
                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                      </svg>
                      <svg
                        class='w-4 h-4 ms-1 text-gray-300 dark:text-gray-500'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 22 20'
                      >
                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                      </svg>
                    </div>
                  </div>
                  <span className='text-[#EA1B25] font-bold text-lg'>
                    100 EGP
                  </span>
                </div>
              </div>
              <div className={style.productLayer + ' col-md-2'}>
                {isMobile ? (
                  <div className='flex flex-row items-center justify-center gap-3 mt-2'>
                    <div className='bg-[#D2D2D2] p-3 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#EA1B25] hover:text-white transition-all duration-300'>
                      <i className='fa-regular fa-heart text-md'></i>
                    </div>
                    <div className='bg-[#D2D2D2] p-3 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#EA1B25] hover:text-white transition-all duration-300'>
                      <i className='fa-solid fa-cart-plus text-md'></i>
                    </div>
                  </div>
                ) : (
                  <div className='flex flex-col items-center gap-52 mt-3'>
                    <div className='bg-[#D2D2D2] p-3 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#EA1B25] hover:text-white transition-all duration-300'>
                      <i className='fa-regular fa-heart text-md'></i>
                    </div>
                    <div className='bg-[#D2D2D2] p-3 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#EA1B25] hover:text-white transition-all duration-300'>
                      <i className='fa-solid fa-cart-plus text-md'></i>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={style.productCard + ' col-md-3'}>
            <div className='row mb-2 p-2 group hover:transform hover:scale-105 transition-transform duration-700'>
              <div className='col-md-10'>
                <div className='flex flex-col items-start'>
                  <img src={product4} className='w-full h-64' />
                  <span className='font-normal'>
                    Kodak PIXPRO Astro Zoom AZ4221 16 MP 2
                  </span>
                  <div>
                    <div class='flex items-center my-1'>
                      <svg
                        class='w-4 h-4 text-yellow-300 ms-1'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 22 20'
                      >
                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                      </svg>
                      <svg
                        class='w-4 h-4 text-yellow-300 ms-1'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 22 20'
                      >
                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                      </svg>
                      <svg
                        class='w-4 h-4 text-yellow-300 ms-1'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 22 20'
                      >
                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                      </svg>
                      <svg
                        class='w-4 h-4 text-yellow-300 ms-1'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 22 20'
                      >
                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                      </svg>
                      <svg
                        class='w-4 h-4 ms-1 text-gray-300 dark:text-gray-500'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 22 20'
                      >
                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                      </svg>
                    </div>
                  </div>
                  <span className='text-[#EA1B25] font-bold text-lg'>
                    100 EGP
                  </span>
                </div>
              </div>
              <div className={style.productLayer + ' col-md-2'}>
                {isMobile ? (
                  <div className='flex flex-row items-center justify-center gap-3 mt-2'>
                    <div className='bg-[#D2D2D2] p-3 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#EA1B25] hover:text-white transition-all duration-300'>
                      <i className='fa-regular fa-heart text-md'></i>
                    </div>
                    <div className='bg-[#D2D2D2] p-3 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#EA1B25] hover:text-white transition-all duration-300'>
                      <i className='fa-solid fa-cart-plus text-md'></i>
                    </div>
                  </div>
                ) : (
                  <div className='flex flex-col items-center gap-52 mt-3'>
                    <div className='bg-[#D2D2D2] p-3 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#EA1B25] hover:text-white transition-all duration-300'>
                      <i className='fa-regular fa-heart text-md'></i>
                    </div>
                    <div className='bg-[#D2D2D2] p-3 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#EA1B25] hover:text-white transition-all duration-300'>
                      <i className='fa-solid fa-cart-plus text-md'></i>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end new */}

      {/* start offers-slider */}
      {isMobile ? (
        <div className='container'>
          <Slider {...settings}>
            <div>
              <div className='row bg-white p-7 items-center'>
                <div className='col-md-6'>
                  <div className='flex flex-col'>
                    <span className='text-[#EA1B25] text-[28px] font-bold'>
                      NEW DIESEL OIL
                    </span>
                    <span className='text-[#222222] font-bold text-[52px]'>
                      Save 50% On All your auto parts
                    </span>
                    <span className='text-md text-[#777777]'>
                      Enter promo code{' '}
                      <span className='text-danger'>nashaat90</span> in cart
                      until 19 December
                    </span>
                    <button className='bg-[#EA1B25] text-white px-4 py-2 text-lg font-bold rounded-md my-4'>
                      SHOP NOW
                    </button>
                  </div>
                </div>
                <div className='col-md-6'>
                  <img src={slide2} alt='' className='w-full' />
                </div>
              </div>
            </div>
            <div>
              <div className='row bg-white p-7 items-center'>
                <div className='col-md-6'>
                  <div className='flex flex-col'>
                    <span className='text-[#EA1B25] text-[28px] font-bold'>
                      NEW DIESEL OIL
                    </span>
                    <span className='text-[#222222] font-bold text-[52px]'>
                      Save 50% On All your auto parts
                    </span>
                    <span className='text-md text-[#777777]'>
                      Enter promo code{' '}
                      <span className='text-danger'>nashaat90</span> in cart
                      until 19 December
                    </span>
                    <button className='bg-[#EA1B25] text-white px-4 py-2 text-lg font-bold rounded-md my-4'>
                      SHOP NOW
                    </button>
                  </div>
                </div>
                <div className='col-md-6'>
                  <img src={slide3} alt='' className='w-full' />
                </div>
              </div>
            </div>
            <div>
              <div className='row bg-white p-7 items-center'>
                <div className='col-md-6'>
                  <div className='flex flex-col'>
                    <span className='text-[#EA1B25] text-[28px] font-bold'>
                      NEW DIESEL OIL
                    </span>
                    <span className='text-[#222222] font-bold text-[52px]'>
                      Save 50% On All your auto parts
                    </span>
                    <span className='text-md text-[#777777]'>
                      Enter promo code{' '}
                      <span className='text-danger'>nashaat90</span> in cart
                      until 19 December
                    </span>
                    <button className='bg-[#EA1B25] text-white px-4 py-2 text-lg font-bold rounded-md my-4'>
                      SHOP NOW
                    </button>
                  </div>
                </div>
                <div className='col-md-6'>
                  <img src={slide1} alt='' className='w-full' />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      ) : (
        <div className='container'>
          <Slider {...settings}>
            <div>
              <div className='row bg-white p-7 items-center'>
                <div className='col-md-6'>
                  <div className='flex flex-col'>
                    <span className='text-[#EA1B25] text-[28px] font-bold'>
                      NEW DIESEL OIL
                    </span>
                    <span className='text-[#222222] font-bold text-[52px]'>
                      Save 50% On All your auto parts
                    </span>
                    <span className='text-md text-[#777777]'>
                      Enter promo code{' '}
                      <span className='text-danger'>nashaat90</span> in cart
                      until 19 December
                    </span>
                    <div className='mt-4'>
                      <button className='bg-[#EA1B25] text-white px-4 py-2 text-lg font-bold rounded-md'>
                        SHOP NOW
                      </button>
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <img src={slide2} alt='' className='w-full h-80' />
                </div>
              </div>
            </div>
            <div>
              <div className='row bg-white p-7 items-center'>
                <div className='col-md-6'>
                  <div className='flex flex-col'>
                    <span className='text-[#EA1B25] text-[28px] font-bold'>
                      NEW DIESEL OIL
                    </span>
                    <span className='text-[#222222] font-bold text-[52px]'>
                      Save 50% On All your auto parts
                    </span>
                    <span className='text-md text-[#777777]'>
                      Enter promo code{' '}
                      <span className='text-danger'>nashaat90</span> in cart
                      until 19 December
                    </span>
                    <div className='mt-4'>
                      <button className='bg-[#EA1B25] text-white px-4 py-2 text-lg font-bold rounded-md'>
                        SHOP NOW
                      </button>
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <img src={slide3} alt='' className='w-full h-80' />
                </div>
              </div>
            </div>
            <div>
              <div className='row bg-white p-7 items-center'>
                <div className='col-md-6'>
                  <div className='flex flex-col'>
                    <span className='text-[#EA1B25] text-[28px] font-bold'>
                      NEW DIESEL OIL
                    </span>
                    <span className='text-[#222222] font-bold text-[52px]'>
                      Save 50% On All your auto parts
                    </span>
                    <span className='text-md text-[#777777]'>
                      Enter promo code{' '}
                      <span className='text-danger'>nashaat90</span> in cart
                      until 19 December
                    </span>
                    <div className='mt-4'>
                      <button className='bg-[#EA1B25] text-white px-4 py-2 text-lg font-bold rounded-md'>
                        SHOP NOW
                      </button>
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <img src={slide1} alt='' className='w-full h-80' />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      )}
      {/* end offers-slider */}

      {/* start offers */}
      <div className='container pb-5'>
        <div className='row'>
          <div className='col-md-8'>
            <div className='flex flex-col'>
              <div className='flex flex-row justify-between items-center'>
                {isMobile ? (
                  <div className='flex flex-row items-center justify-start gap-2 my-12'>
                    <h2 className='text-[28px]'>
                      <span className='font-bold'>THIS WEEK'S</span> HOT DEALS
                    </h2>
                  </div>
                ) : (
                  <div className='flex flex-row items-center justify-start gap-3 my-12'>
                    <div className='w-9 h-1 bg-[#DC3545]'></div>
                    <h2 className='text-[41px]'>
                      <span className='font-bold'>THIS WEEK'S</span> HOT DEALS
                    </h2>
                  </div>
                )}
              </div>
              <div className='row justify-center items-center'>
                <div className='row bg-white p-3'>
                  <div className={style.productCard + ' col-md-6'}>
                    <div className='row mb-2 p-2 group hover:transform hover:scale-105 transition-transform duration-700'>
                      <div className='col-md-10'>
                        <div className='flex flex-col items-start'>
                          <img src={slide4} className='w-full h-80' />
                          <span className='font-normal'>
                            Kodak PIXPRO Astro Zoom AZ4221 16 MP 2
                          </span>
                          <div>
                            <div class='flex items-center my-1'>
                              <svg
                                class='w-4 h-4 text-yellow-300 ms-1'
                                aria-hidden='true'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='currentColor'
                                viewBox='0 0 22 20'
                              >
                                <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                              </svg>
                              <svg
                                class='w-4 h-4 text-yellow-300 ms-1'
                                aria-hidden='true'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='currentColor'
                                viewBox='0 0 22 20'
                              >
                                <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                              </svg>
                              <svg
                                class='w-4 h-4 text-yellow-300 ms-1'
                                aria-hidden='true'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='currentColor'
                                viewBox='0 0 22 20'
                              >
                                <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                              </svg>
                              <svg
                                class='w-4 h-4 text-yellow-300 ms-1'
                                aria-hidden='true'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='currentColor'
                                viewBox='0 0 22 20'
                              >
                                <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                              </svg>
                              <svg
                                class='w-4 h-4 ms-1 text-gray-300 dark:text-gray-500'
                                aria-hidden='true'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='currentColor'
                                viewBox='0 0 22 20'
                              >
                                <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                              </svg>
                            </div>
                          </div>
                          <div className='flex flex-row gap-3 mb-4'>
                            <span className='text-[#EA1B25] font-bold text-lg'>
                              100 EGP
                            </span>
                            <span className='text-[#989898] font-bold text-lg line-through'>
                              150 EGP
                            </span>
                          </div>
                          {isMobile ? (
                            <div className='flex flex-row items-center justify-between gap-14'>
                              <div className='flex flex-col'>
                                <span className='font-semibold text-md'>
                                  Hurry up!
                                </span>
                                <span className='text-[#7B7B7B]'>
                                  offer ends in :
                                </span>
                              </div>
                              <div className='flex flex-row justify-between items-center gap-1'>
                                <div className='flex flex-col gap-2 items-center'>
                                  <div className='bg-[#E8E8E8] rounded-full flex items-center justify-center cursor-pointer'>
                                    <span className='font-bold px-2 py-1'>
                                      0
                                    </span>
                                  </div>
                                  <span className='uppercase text-[#7B7B7B] text-xs font-semibold'>
                                    Days
                                  </span>
                                </div>
                                <div className='flex flex-col gap-2 items-center'>
                                  <div className='bg-[#E8E8E8] rounded-full flex items-center justify-center cursor-pointer'>
                                    <span className='font-bold p-1'>00</span>
                                  </div>
                                  <span className='uppercase text-[#7B7B7B] text-xs font-semibold'>
                                    Hours
                                  </span>
                                </div>
                                <div className='flex flex-col gap-2 items-center'>
                                  <div className='bg-[#E8E8E8] rounded-full flex items-center justify-center cursor-pointer'>
                                    <span className='font-bold p-1'>00</span>
                                  </div>
                                  <span className='uppercase text-[#7B7B7B] text-xs font-semibold'>
                                    mins
                                  </span>
                                </div>
                                <div className='flex flex-col gap-2 items-center'>
                                  <div className='bg-[#E8E8E8] rounded-full flex items-center justify-center cursor-pointer'>
                                    <span className='font-bold p-1'>00</span>
                                  </div>
                                  <span className='uppercase text-[#7B7B7B] text-xs font-semibold'>
                                    secs
                                  </span>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className='flex flex-row items-center justify-between gap-4'>
                              <div className='flex flex-col'>
                                <span className='font-semibold text-lg'>
                                  Hurry up!
                                </span>
                                <span className='text-[#7B7B7B]'>
                                  offer ends in :
                                </span>
                              </div>
                              <div className='flex flex-row justify-between items-center gap-1'>
                                <div className='flex flex-col gap-2 items-center'>
                                  <div className='bg-[#E8E8E8] rounded-full flex items-center justify-center cursor-pointer'>
                                    <span className='font-bold px-3 py-2'>
                                      0
                                    </span>
                                  </div>
                                  <span className='uppercase text-[#7B7B7B] text-xs font-semibold'>
                                    Days
                                  </span>
                                </div>
                                <div className='flex flex-col gap-2 items-center'>
                                  <div className='bg-[#E8E8E8] rounded-full flex items-center justify-center cursor-pointer'>
                                    <span className='font-bold px-3 py-2'>
                                      00
                                    </span>
                                  </div>
                                  <span className='uppercase text-[#7B7B7B] text-xs font-semibold'>
                                    Hours
                                  </span>
                                </div>
                                <div className='flex flex-col gap-2 items-center'>
                                  <div className='bg-[#E8E8E8] rounded-full flex items-center justify-center cursor-pointer'>
                                    <span className='font-bold px-3 py-2'>
                                      00
                                    </span>
                                  </div>
                                  <span className='uppercase text-[#7B7B7B] text-xs font-semibold'>
                                    mins
                                  </span>
                                </div>
                                <div className='flex flex-col gap-2 items-center'>
                                  <div className='bg-[#E8E8E8] rounded-full flex items-center justify-center cursor-pointer'>
                                    <span className='font-bold px-3 py-2'>
                                      00
                                    </span>
                                  </div>
                                  <span className='uppercase text-[#7B7B7B] text-xs font-semibold'>
                                    secs
                                  </span>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className={style.productLayer + ' col-md-2'}>
                        {isMobile ? (
                          <div className='flex flex-row items-center justify-center gap-3 mt-2'>
                            <div className='bg-[#D2D2D2] p-3 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#EA1B25] hover:text-white transition-all duration-300'>
                              <i className='fa-regular fa-heart text-md'></i>
                            </div>
                            <div className='bg-[#D2D2D2] p-3 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#EA1B25] hover:text-white transition-all duration-300'>
                              <i className='fa-solid fa-cart-plus text-md'></i>
                            </div>
                          </div>
                        ) : (
                          <div className='flex flex-col items-center gap-52 mt-3'>
                            <div className='bg-[#D2D2D2] p-3 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#EA1B25] hover:text-white transition-all duration-300'>
                              <i className='fa-regular fa-heart text-md'></i>
                            </div>
                            <div className='bg-[#D2D2D2] p-3 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#EA1B25] hover:text-white transition-all duration-300'>
                              <i className='fa-solid fa-cart-plus text-md'></i>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={style.productCard + ' col-md-6'}>
                    <div className='row mb-2 p-2 group hover:transform hover:scale-105 transition-transform duration-700'>
                      <div className='col-md-10'>
                        <div className='flex flex-col items-start'>
                          <img src={slide5} className='w-full h-80' />
                          <span className='font-normal'>
                            Kodak PIXPRO Astro Zoom AZ4221 16 MP 2
                          </span>
                          <div>
                            <div class='flex items-center my-1'>
                              <svg
                                class='w-4 h-4 text-yellow-300 ms-1'
                                aria-hidden='true'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='currentColor'
                                viewBox='0 0 22 20'
                              >
                                <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                              </svg>
                              <svg
                                class='w-4 h-4 text-yellow-300 ms-1'
                                aria-hidden='true'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='currentColor'
                                viewBox='0 0 22 20'
                              >
                                <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                              </svg>
                              <svg
                                class='w-4 h-4 text-yellow-300 ms-1'
                                aria-hidden='true'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='currentColor'
                                viewBox='0 0 22 20'
                              >
                                <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                              </svg>
                              <svg
                                class='w-4 h-4 text-yellow-300 ms-1'
                                aria-hidden='true'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='currentColor'
                                viewBox='0 0 22 20'
                              >
                                <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                              </svg>
                              <svg
                                class='w-4 h-4 ms-1 text-gray-300 dark:text-gray-500'
                                aria-hidden='true'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='currentColor'
                                viewBox='0 0 22 20'
                              >
                                <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                              </svg>
                            </div>
                          </div>
                          <div className='flex flex-row gap-3 mb-4'>
                            <span className='text-[#EA1B25] font-bold text-lg'>
                              100 EGP
                            </span>
                            <span className='text-[#989898] font-bold text-lg line-through'>
                              150 EGP
                            </span>
                          </div>
                          {isMobile ? (
                            <div className='flex flex-row items-center justify-between gap-14'>
                              <div className='flex flex-col'>
                                <span className='font-semibold text-md'>
                                  Hurry up!
                                </span>
                                <span className='text-[#7B7B7B]'>
                                  offer ends in :
                                </span>
                              </div>
                              <div className='flex flex-row justify-between items-center gap-1'>
                                <div className='flex flex-col gap-2 items-center'>
                                  <div className='bg-[#E8E8E8] rounded-full flex items-center justify-center cursor-pointer'>
                                    <span className='font-bold px-2 py-1'>
                                      0
                                    </span>
                                  </div>
                                  <span className='uppercase text-[#7B7B7B] text-xs font-semibold'>
                                    Days
                                  </span>
                                </div>
                                <div className='flex flex-col gap-2 items-center'>
                                  <div className='bg-[#E8E8E8] rounded-full flex items-center justify-center cursor-pointer'>
                                    <span className='font-bold p-1'>00</span>
                                  </div>
                                  <span className='uppercase text-[#7B7B7B] text-xs font-semibold'>
                                    Hours
                                  </span>
                                </div>
                                <div className='flex flex-col gap-2 items-center'>
                                  <div className='bg-[#E8E8E8] rounded-full flex items-center justify-center cursor-pointer'>
                                    <span className='font-bold p-1'>00</span>
                                  </div>
                                  <span className='uppercase text-[#7B7B7B] text-xs font-semibold'>
                                    mins
                                  </span>
                                </div>
                                <div className='flex flex-col gap-2 items-center'>
                                  <div className='bg-[#E8E8E8] rounded-full flex items-center justify-center cursor-pointer'>
                                    <span className='font-bold p-1'>00</span>
                                  </div>
                                  <span className='uppercase text-[#7B7B7B] text-xs font-semibold'>
                                    secs
                                  </span>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className='flex flex-row items-center justify-between gap-4'>
                              <div className='flex flex-col'>
                                <span className='font-semibold text-lg'>
                                  Hurry up!
                                </span>
                                <span className='text-[#7B7B7B]'>
                                  offer ends in :
                                </span>
                              </div>
                              <div className='flex flex-row justify-between items-center gap-1'>
                                <div className='flex flex-col gap-2 items-center'>
                                  <div className='bg-[#E8E8E8] rounded-full flex items-center justify-center cursor-pointer'>
                                    <span className='font-bold px-3 py-2'>
                                      0
                                    </span>
                                  </div>
                                  <span className='uppercase text-[#7B7B7B] text-xs font-semibold'>
                                    Days
                                  </span>
                                </div>
                                <div className='flex flex-col gap-2 items-center'>
                                  <div className='bg-[#E8E8E8] rounded-full flex items-center justify-center cursor-pointer'>
                                    <span className='font-bold px-3 py-2'>
                                      00
                                    </span>
                                  </div>
                                  <span className='uppercase text-[#7B7B7B] text-xs font-semibold'>
                                    Hours
                                  </span>
                                </div>
                                <div className='flex flex-col gap-2 items-center'>
                                  <div className='bg-[#E8E8E8] rounded-full flex items-center justify-center cursor-pointer'>
                                    <span className='font-bold px-3 py-2'>
                                      00
                                    </span>
                                  </div>
                                  <span className='uppercase text-[#7B7B7B] text-xs font-semibold'>
                                    mins
                                  </span>
                                </div>
                                <div className='flex flex-col gap-2 items-center'>
                                  <div className='bg-[#E8E8E8] rounded-full flex items-center justify-center cursor-pointer'>
                                    <span className='font-bold px-3 py-2'>
                                      00
                                    </span>
                                  </div>
                                  <span className='uppercase text-[#7B7B7B] text-xs font-semibold'>
                                    secs
                                  </span>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className={style.productLayer + ' col-md-2'}>
                        {isMobile ? (
                          <div className='flex flex-row items-center justify-center gap-3 mt-2'>
                            <div className='bg-[#D2D2D2] p-3 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#EA1B25] hover:text-white transition-all duration-300'>
                              <i className='fa-regular fa-heart text-md'></i>
                            </div>
                            <div className='bg-[#D2D2D2] p-3 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#EA1B25] hover:text-white transition-all duration-300'>
                              <i className='fa-solid fa-cart-plus text-md'></i>
                            </div>
                          </div>
                        ) : (
                          <div className='flex flex-col items-center gap-52 mt-3'>
                            <div className='bg-[#D2D2D2] p-3 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#EA1B25] hover:text-white transition-all duration-300'>
                              <i className='fa-regular fa-heart text-md'></i>
                            </div>
                            <div className='bg-[#D2D2D2] p-3 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#EA1B25] hover:text-white transition-all duration-300'>
                              <i className='fa-solid fa-cart-plus text-md'></i>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='flex flex-row justify-between items-center mt-2'>
              {isMobile ? (
                <div className='flex flex-row items-center justify-start gap-2 my-12'>
                  <h2 className='text-[28px]'>
                    <span className='font-bold'>BEST</span> SELLERS
                  </h2>
                </div>
              ) : (
                <div className='flex flex-row items-center justify-start gap-3 my-12'>
                  <div className='w-9 h-1 bg-[#DC3545]'></div>
                  <h2 className='text-[41px]'>
                    <span className='font-bold'>BEST</span> SELLERS
                  </h2>
                </div>
              )}
            </div>
            <div className='flex flex-col bg-white'>
              <div className='flex flex-row justify-between items-center'>
                <img src={side1} className='w-full h-44' />
                <div className='flex flex-col'>
                  <span className='font-normal'>
                    Kodak PIXPRO Astro Zoom AZ4221 16 MP 2
                  </span>
                  <div>
                    <div class='flex items-center'>
                      <svg
                        class='w-4 h-4 text-yellow-300 ms-1'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 22 20'
                      >
                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                      </svg>
                      <svg
                        class='w-4 h-4 text-yellow-300 ms-1'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 22 20'
                      >
                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                      </svg>
                      <svg
                        class='w-4 h-4 text-yellow-300 ms-1'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 22 20'
                      >
                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                      </svg>
                      <svg
                        class='w-4 h-4 text-yellow-300 ms-1'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 22 20'
                      >
                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                      </svg>
                      <svg
                        class='w-4 h-4 ms-1 text-gray-300 dark:text-gray-500'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 22 20'
                      >
                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                      </svg>
                    </div>
                  </div>
                  <span className='text-[#EA1B25] font-bold text-lg'>
                    100 EGP
                  </span>
                </div>
              </div>
            </div>
            <div className='flex flex-col bg-white'>
              <div className='flex flex-row justify-between items-center'>
                <img src={side2} className='w-full h-44' />
                <div className='flex flex-col'>
                  <span className='font-normal'>
                    Kodak PIXPRO Astro Zoom AZ4221 16 MP 2
                  </span>
                  <div>
                    <div class='flex items-center'>
                      <svg
                        class='w-4 h-4 text-yellow-300 ms-1'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 22 20'
                      >
                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                      </svg>
                      <svg
                        class='w-4 h-4 text-yellow-300 ms-1'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 22 20'
                      >
                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                      </svg>
                      <svg
                        class='w-4 h-4 text-yellow-300 ms-1'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 22 20'
                      >
                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                      </svg>
                      <svg
                        class='w-4 h-4 text-yellow-300 ms-1'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 22 20'
                      >
                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                      </svg>
                      <svg
                        class='w-4 h-4 ms-1 text-gray-300 dark:text-gray-500'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 22 20'
                      >
                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                      </svg>
                    </div>
                  </div>
                  <span className='text-[#EA1B25] font-bold text-lg'>
                    100 EGP
                  </span>
                </div>
              </div>
            </div>
            <div className='flex flex-col bg-white'>
              <div className='flex flex-row justify-between items-center'>
                <img src={side3} className='w-full h-44' />
                <div className='flex flex-col'>
                  <span className='font-normal'>
                    Kodak PIXPRO Astro Zoom AZ4221 16 MP 2
                  </span>
                  <div>
                    <div class='flex items-center'>
                      <svg
                        class='w-4 h-4 text-yellow-300 ms-1'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 22 20'
                      >
                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                      </svg>
                      <svg
                        class='w-4 h-4 text-yellow-300 ms-1'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 22 20'
                      >
                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                      </svg>
                      <svg
                        class='w-4 h-4 text-yellow-300 ms-1'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 22 20'
                      >
                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                      </svg>
                      <svg
                        class='w-4 h-4 text-yellow-300 ms-1'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 22 20'
                      >
                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                      </svg>
                      <svg
                        class='w-4 h-4 ms-1 text-gray-300 dark:text-gray-500'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 22 20'
                      >
                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                      </svg>
                    </div>
                  </div>
                  <span className='text-[#EA1B25] font-bold text-lg'>
                    100 EGP
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end offers */}

      {/* start cover-sale */}
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-10'>
          {isMobile ? (
            <>
              <div>
                <div className='relative overflow-hidden'>
                  <img
                    src={cover1}
                    className={
                      style.coverImg +
                      ' w-full group hover:scale-110 transition-transform duration-500'
                    }
                  />
                  <div className='absolute top-10 left-7 flex flex-col text-white'>
                    <span className='uppercase text-2xl font-bold'>
                      headlights
                    </span>
                    <span className='text-xl font-thin'>parts</span>
                    <span className='text-2xl font-bold'>25% off</span>
                    <div>
                      <button className='uppercase text-white px-3 py-1 rounded mt-2 hover:bg-[#EA1B25] hover:border-[#EA1B25] border hover:text-white transition-all duration-300'>
                        shop now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className='relative overflow-hidden'>
                  <img
                    src={cover2}
                    className={
                      style.coverImg +
                      ' w-full group hover:scale-110 transition-transform duration-500'
                    }
                  />
                  <div className='absolute top-10 left-7 flex flex-col text-white'>
                    <span className='uppercase text-2xl font-bold'>
                      headlights
                    </span>
                    <span className='text-xl font-thin'>parts</span>
                    <span className='text-2xl font-bold'>25% off</span>
                    <div>
                      <button className='uppercase text-white px-3 py-1 rounded mt-2 hover:bg-[#EA1B25] hover:border-[#EA1B25] border hover:text-white transition-all duration-300'>
                        shop now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className='relative overflow-hidden'>
                  <img
                    src={cover3}
                    className={
                      style.coverImg +
                      ' w-full group hover:scale-110 transition-transform duration-500'
                    }
                  />
                  <div className='absolute top-10 left-7 flex flex-col text-white'>
                    <span className='uppercase text-2xl font-bold'>
                      headlights
                    </span>
                    <span className='text-xl font-thin'>parts</span>
                    <span className='text-2xl font-bold'>25% off</span>
                    <div>
                      <button className='uppercase text-white px-3 py-1 rounded mt-2 hover:bg-[#EA1B25] hover:border-[#EA1B25] border hover:text-white transition-all duration-300'>
                        shop now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                <div className='relative overflow-hidden'>
                  <img
                    src={cover1}
                    className={
                      style.coverImg +
                      ' w-full group hover:scale-110 transition-transform duration-500'
                    }
                  />
                  <div className='absolute top-14 left-7 flex flex-col text-white'>
                    <span className='uppercase text-4xl font-bold'>
                      headlights
                    </span>
                    <span className='text-3xl font-thin'>parts</span>
                    <span className='text-4xl font-bold'>25% off</span>
                    <div>
                      <button className='uppercase text-white px-4 py-2 rounded mt-4 hover:bg-[#EA1B25] hover:border-[#EA1B25] border hover:text-white transition-all duration-300'>
                        shop now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className='relative overflow-hidden'>
                  <img
                    src={cover2}
                    className={
                      style.coverImg +
                      ' w-full group hover:scale-110 transition-transform duration-500'
                    }
                  />
                  <div className='absolute top-14 left-7 flex flex-col text-white'>
                    <span className='uppercase text-4xl font-bold'>
                      headlights
                    </span>
                    <span className='text-3xl font-thin'>parts</span>
                    <span className='text-4xl font-bold'>25% off</span>
                    <div>
                      <button className='uppercase text-white px-4 py-2 rounded mt-4 hover:bg-[#EA1B25] hover:border-[#EA1B25] border hover:text-white transition-all duration-300'>
                        shop now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className='relative overflow-hidden'>
                  <img
                    src={cover3}
                    className={
                      style.coverImg +
                      ' w-full group hover:scale-110 transition-transform duration-500'
                    }
                  />
                  <div className='absolute top-14 left-7 flex flex-col text-white'>
                    <span className='uppercase text-4xl font-bold'>
                      headlights
                    </span>
                    <span className='text-3xl font-thin'>parts</span>
                    <span className='text-4xl font-bold'>25% off</span>
                    <div>
                      <button className='uppercase text-white px-4 py-2 rounded mt-4 hover:bg-[#EA1B25] hover:border-[#EA1B25] border hover:text-white transition-all duration-300'>
                        shop now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      {/* end cover-sale */}

      {/* start contact-us */}
      {isMobile?<div className='container'>
        <section id='contact' className='pb-12'>
          {/* <h3 className='text-2xl font-bold pb-5 text-center'>Contact Us.</h3> */}
          <div className='flex flex-row items-center justify-center gap-3 mt-16 mb-10'>
            <div className='w-9 h-1 bg-[#DC3545]'></div>
            <h2 className='text-[41px]'>
              <span className='font-bold'>CONTACT</span> US
            </h2>
          </div>
          <div className='mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3'>
              {/* Address Card */}
              {/* <div className='bg-white text-center p-4 rounded shadow'>
                <div className='flex justify-center items-center bg-gray-100 w-12 h-12 rounded-full m-auto'>
                  <i className='fa-solid fa-location-arrow text-xl text-gray-700' />
                </div>
                <h6 className='pt-2 text-lg font-semibold'>Address</h6>
                <p className='text-gray-600'>
                  6834 Hollywood Blvd - Los Angeles CA
                </p>
              </div> */}
              {/* Email Card */}
              <div className='bg-white text-center p-4 rounded shadow'>
                <div className='flex justify-center items-center bg-gray-100 w-12 h-12 rounded-full m-auto'>
                  <i className='fa-solid fa-envelope text-xl text-[#DC3545]' />
                </div>
                <h6 className='pt-2 text-lg font-semibold'>Email</h6>
                <p className='text-gray-600'>Support@website.com</p>
              </div>
              {/* Phone Card */}
              <div className='bg-white text-center p-4 rounded shadow'>
                <div className='flex justify-center items-center bg-gray-100 w-12 h-12 rounded-full m-auto'>
                  <i className='fa-solid fa-phone text-xl text-[#DC3545]' />
                </div>
                <h6 className='pt-2 text-lg font-semibold'>Phone</h6>
                <p className='text-gray-600'>+20 010 2517 8918</p>
              </div>
            </div>
            <form className='mt-8'>
              <div className='flex flex-col lg:flex-row gap-4'>
                <input
                  type='text'
                  placeholder='First name'
                  aria-label='First name'
                  className='border rounded p-3 w-full lg:w-1/2'
                />
                <input
                  type='text'
                  placeholder='Last name'
                  aria-label='Last name'
                  className='border rounded p-3 w-full lg:w-1/2'
                />
              </div>
              <textarea
                cols={10}
                rows={6}
                placeholder='Message'
                className='border rounded p-3 mt-4 w-full'
                defaultValue={''}
              />
              <button
                type='button'
                className='bg-[#DC3545] text-white px-6 py-2 rounded mt-4 hover:bg-gray-700 transition block m-auto'
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </div>:<div className='container w-3/4'>
        <section id='contact' className='pb-12'>
          {/* <h3 className='text-2xl font-bold pb-5 text-center'>Contact Us.</h3> */}
          <div className='flex flex-row items-center justify-center gap-3 mt-16 mb-10'>
            <div className='w-9 h-1 bg-[#DC3545]'></div>
            <h2 className='text-[41px]'>
              <span className='font-bold'>CONTACT</span> US
            </h2>
          </div>
          <div className='mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
              {/* Address Card */}
              {/* <div className='bg-white text-center p-4 rounded shadow'>
                <div className='flex justify-center items-center bg-gray-100 w-12 h-12 rounded-full m-auto'>
                  <i className='fa-solid fa-location-arrow text-xl text-gray-700' />
                </div>
                <h6 className='pt-2 text-lg font-semibold'>Address</h6>
                <p className='text-gray-600'>
                  6834 Hollywood Blvd - Los Angeles CA
                </p>
              </div> */}
              {/* Email Card */}
              <div className='bg-white text-center p-4 rounded shadow'>
                <div className='flex justify-center items-center bg-gray-100 w-12 h-12 rounded-full m-auto'>
                  <i className='fa-solid fa-envelope text-xl text-[#DC3545]' />
                </div>
                <h6 className='pt-2 text-lg font-semibold'>Email</h6>
                <p className='text-gray-600'>Support@website.com</p>
              </div>
              {/* Phone Card */}
              <div className='bg-white text-center p-4 rounded shadow'>
                <div className='flex justify-center items-center bg-gray-100 w-12 h-12 rounded-full m-auto'>
                  <i className='fa-solid fa-phone text-xl text-[#DC3545]' />
                </div>
                <h6 className='pt-2 text-lg font-semibold'>Phone</h6>
                <p className='text-gray-600'>+20 010 2517 8918</p>
              </div>
            </div>
            <form className='mt-8'>
              <div className='flex flex-col lg:flex-row gap-4'>
                <input
                  type='text'
                  placeholder='First name'
                  aria-label='First name'
                  className='border rounded p-3 w-full lg:w-1/2'
                />
                <input
                  type='text'
                  placeholder='Last name'
                  aria-label='Last name'
                  className='border rounded p-3 w-full lg:w-1/2'
                />
              </div>
              <textarea
                cols={10}
                rows={6}
                placeholder='Message'
                className='border rounded p-3 mt-4 w-full'
                defaultValue={''}
              />
              <button
                type='button'
                className='bg-[#DC3545] text-white px-6 py-2 rounded mt-4 hover:bg-gray-700 transition block m-auto'
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </div>}
      {/* end contact-us */}
    </div>
  )
}

export default Home
