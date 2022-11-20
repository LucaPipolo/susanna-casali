// External dependencies.
import Image from 'next/image';
import Link from 'next/link';

import { useState, useEffect } from 'react';

// Internal dependencies.
import Nav from '@components/Nav';

// Data.
import navItems from '@data/navItems';

// Images.
import logo from '@images/susanna-casali.jpg';

// Component.
const SiteHeader = () => {
  // Scroll Status Handler.
  const [animateSiteHeader, setAnimateSiteHeader] = useState(false);
  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 90) {
        setAnimateSiteHeader(true);
      } else setAnimateSiteHeader(false);
    };
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  return (
    <header
      className={`fixed z-10 w-full bg-white/50 backdrop-blur-lg backdrop-filter duration-500 ease-in-out ${
        animateSiteHeader && 'shadow-lg'
      }`}>
      <div className="container mx-auto">
        <div
          className={`flex ${
            animateSiteHeader
              ? 'border-0 border-battleship-gray-100 py-2'
              : 'border-b border-battleship-gray-300 py-4'
          } mx-auto items-center justify-between px-4 duration-500 ease-in-out`}>
          <Link href="/">
            <Image
              className="h-16 max-h-16 w-16 max-w-[4rem] rounded-full object-cover object-top"
              src={logo}
              width={60}
              height={60}
              alt="Susanna Casali"
            />
          </Link>
          <Nav navItems={navItems} />
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
