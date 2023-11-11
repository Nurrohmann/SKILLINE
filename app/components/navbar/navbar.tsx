import Link from 'next/link';
import Image from 'next/image';
import Polygon from '@/assets/navbar/Polygon.svg';
import Padding from '../padding/padding';

export default function Navbar() {
  return (
    <nav className='w-full fixed top-0 z-20 backdrop-blur-md min-[1488px]:flex min-[1488px]:justify-center'>
      <div className='w-full min-[1488px]:w-[70rem]'>
        <Padding>
          <div className='w-full flex items-center justify-between py-[1.5rem]'>
            <div className='relative'>
              <Image
                className='h-[2.9rem] top-[-0.4rem] left-[-1.7rem] absolute z-[-1]'
                src={Polygon}
                alt=''
              />
              <h1
                className='font-[700]  text-[#113C49] text-[1.5rem]'
                style={{ fontFamily: 'poppins, sans-serif' }}
              >
                Skilline
              </h1>
            </div>
            <ul
              className='items-center hidden lg:flex'
              style={{ fontFamily: 'poppins, sans-serif' }}
            >
              <li className='mr-[2rem]'>
                <Link className='text-[#252641]' href={'/'}>
                  Home
                </Link>
              </li>
              <li className='mr-[2rem]'>
                <Link className='text-[#252641]' href={'/'}>
                  Careers
                </Link>
              </li>
              <li className='mr-[2rem]'>
                <Link className='text-[#252641]' href={'/'}>
                  Blog
                </Link>
              </li>
              <li className='mr-[3rem]'>
                <Link className='text-[#252641]' href={'/'}>
                  About Us
                </Link>
              </li>
              <li className='mr-[1rem]'>
                <button className='text-[#6C6C6C] h-[2.1rem] rounded-[2rem] w-[6rem] flex justify-center items-center  bg-white '>
                  Login
                </button>
              </li>
              <li className='mr-[1rem]'>
                <button className='text-[#FFFFFF] h-[2.1rem] rounded-[2rem] w-[6rem] flex justify-center items-center bg-[#F48C06]'>
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
        </Padding>
      </div>
    </nav>
  );
}
