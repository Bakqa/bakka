// 'use client';

// import React from 'react';
// import style from '@/lib/style.module.css';
// import Link from 'next/link';
// import Image from 'next/image';
// import { usePathname } from 'next/navigation';
// import clsx from 'clsx';

// const Header: React.FC = () => {
//   const pathname = usePathname();

//   const navLinks = [
//     { href: '/theMarket', label: 'tMkt', image: '/theMarket.png', alt: 'The Market Platform' },
//     { href: '/gamer', label: 'Game', image: '/gamerAccount.png', alt: 'Gamer Platform' },
//     { href: '/lamp', label: 'Lamp', image: '/lamp.png', alt: 'Lamp Platform' },
//   ];

//   return (
//     <header className={style.wrapheader}>
//       <div className={style.logo}>
//         <Link href='/'>
//           <Image
//             className={style.img}
//             src='/bakkaicon2.png'
//             alt="BakqaBua's logo"
//             width={65}
//             height={40}
//             priority
//           />
//         </Link>
//       </div>

//       <nav className={style.platforms}>
//         {navLinks.map(({ href, label, image, alt }) => {
//           const isActive = pathname === href;

//           return (
//             <Link
//               key={href}
//               href={href}
//               className={clsx(style.pagelink, {
//                 [style.active]: isActive,
//               })}
//               aria-current={isActive ? 'page' : undefined}
//             >
//               <span className={style.mobile}>{label}</span>
//               <Image
//                 src={image}
//                 alt={alt}
//                 width={170}
//                 height={60}
//                 className={style.lgscreen}
//               />
//             </Link>
//           );
//         })}
//       </nav>
//     </header>
//   );
// };

// export default Header;


'use client';

import React from 'react';
import style from '@/lib/style.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';


const Header: React.FC = () => {
  const pathname = usePathname();

  const navLinks = [
    {
      href: '/theMarket',
      label: 'tMkt',
      image: '/theMarket.png',
      alt: 'The Market Platform',
      themeColor: 'var(--clr-tmkt)', // brownish
    },
    {
      href: '/gamer',
      label: 'Game',
      image: '/gamerAccount.png',
      alt: 'Gamer Platform',
      themeColor: 'var(--clr-gamer)', // green
    },
    {
      href: '/lamp',
      label: 'Lamp',
      image: '/lamp.png',
      alt: 'Lamp Platform',
      themeColor: 'var(--clr-lamp)', // Lime Green
    },
  ];

  const activeLink = navLinks.find(link => pathname === link.href);
  const activeColor = activeLink?.themeColor ?? 'teal'; // Default color if no match

  return (
    <header
      className={clsx(style.wrapheader, style.dynamicHeader)}
      style={{ backgroundColor: activeColor }}
    >
      <div className={style.logo}>
        <Link href='/'>
          <Image
            className={style.img}
            src='/bakkaicon2.png'
            alt="BakqaBua's logo"
            width={85}
            height={40}
            priority
          />
        </Link>
      </div>

      <nav className={style.platforms}>
        {navLinks.map(({ href, label, image, alt }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className={clsx(style.pagelink, {
                [style.active]: isActive,
              })}
              aria-current={isActive ? 'page' : undefined}
            >
              <span className={style.mobile}>{label}</span>
              <Image
                src={image}
                alt={alt}
                width={170}
                height={60}
                className={style.lgscreen}
              />
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
