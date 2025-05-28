'use client';

import styles from './header.module.css';
import Image from 'next/image';
import NavLinks from './nav-links';
import clsx from 'clsx';
import { useState } from 'react';
import SidebarNav from './sidebar-nav';

const links = [
  { name: 'Головна', href: '/' },
  { name: 'Моделі', href: '/models' },
  { name: 'Викладачі', href: '/teachers' },
  { name: 'Події', href: '/events' },
  { name: 'Ціни', href: '/prices' },
  { name: 'Контакти', href: '/contacts' },
];

export default function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={clsx('container', styles.headerContent)}>
        <Image src="/logo.svg" width={50} height={50} alt="logo" loading="eager" />

        <nav>
          <NavLinks links={links} />

          <button
            className={styles['burger-menu-btn']}
            onClick={() => setSidebarOpen(true)}
            aria-label="Открыть меню">
            <svg
              width="28"
              height="28"
              viewBox="0 0 29 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 19V17.1973H29V19H0ZM0 10.4013V8.59867H29V10.4013H0ZM0 1.80266V0H29V1.80266H0Z"
                fill="white"
              />
            </svg>
          </button>

          {isSidebarOpen && <SidebarNav links={links} onClose={() => setSidebarOpen(false)} />}
        </nav>
      </div>
    </header>
  );
}
