'use client';

import useBoop from '@/helpers/hooks/useBoop';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { animated } from 'react-spring';

const Navbar = () => {
  const [state, setState] = useState(false);
  const { appliedStyle, trigger } = useBoop({ scale: 1.2 });

  const navigation: Array<{
    label: string;
    route: string;
    routeName: string;
  }> = [
    { label: 'الرئيسة', route: '/', routeName: '' },
    { label: 'عن المنصة', route: '/about', routeName: 'عن_المنصة' },
    { label: 'شرط المنصة', route: '/terms', routeName: 'شرط_المنصة' },
    { label: 'التجويد', route: '/tajweed', routeName: '' },
    { label: 'القراءات', route: '/reading', routeName: '' },
    { label: 'المنوعات واللقاءات', route: '/encounter', routeName: '' },
  ];

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Add closing the navbar menu when navigating
    const handleState = () => {
      document.body.classList.remove('overflow-hidden');
      setState(false);
    };

    handleState();
  }, [pathname, searchParams]);

  const handleNavMenu = () => {
    setState(!state);
    document.body.classList.toggle('overflow-hidden');
  };

  return (
    <header>
      <div className="flex items-center px-10 py-2 bg-green-200">
        <animated.div onMouseEnter={() => trigger()} style={appliedStyle}>
          <Image
            src="/palestine.png"
            className="shadow-lg rounded-full"
            alt=""
            height={20}
            width={20}
          />
        </animated.div>
        <span className="ms-2 font-medium text-sm capitalize text-gray-700">
          النصر لفلسطين
        </span>
      </div>
      <nav
        className={` w-full md:static md:text-sm ${
          state ? 'fixed z-10 h-full' : ''
        }`}
      >
        <div className="max-w-7xl justify-between items-center mx-auto md:flex px-6">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/" className=" ">
              <Image
                src="/logo.png"
                alt="logo"
                width={35}
                height={35}
                className="rounded-lg"
              />
              {/* <div className="font-bold text-lg">{siteMetadata.siteName}</div> */}
            </Link>
            <div className="md:hidden">
              <button
                role="button"
                aria-label="Open the menu"
                className="text-gray-500 hover:text-gray-800"
                onClick={handleNavMenu}
              >
                {state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div
            className={`pb-3 mt-8 md:pb-0 md:mt-0 md:block mx-auto ${
              state ? '' : 'hidden'
            }`}
          >
            <ul className="text-gray-700 justify-center items-center space-y-6 md:flex md:space-y-0 md:text-gray-600 md:font-medium">
              {navigation.map((route, idx) => {
                return (
                  <li key={idx} className="me-6">
                    <Link
                      href={route.route}
                      className={`flex text-gray-400  transition px-3 relative text-center ${
                        pathname === route.route
                          ? "font-bold text-primary transition-all after:content-[''] after:absolute after:h-[2px] after:w-1/2 after:block after:bg-primary/60 after:-bottom-1 after:right-0 after:-translate-x-1/2"
                          : 'hover:text-gray-500'
                      }`}
                    >
                      <p>{route.label}</p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
