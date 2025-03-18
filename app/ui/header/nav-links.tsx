'use client';

import styles from './header.module.css';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Головна', href: '/' },
  { name: 'Моделі', href: '/models' },
  { name: 'Викладачі', href: '/teachers' },
  { name: 'Події', href: '/events' },
  { name: 'Ціни', href: '/prices' },
  { name: 'Контакти', href: '/contacts' },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul>
      {links.map((link) => {
        const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);

        return (
          <li key={link.name}>
            <Link href={link.href} className={clsx({ [styles.selected]: isActive })}>
              {link.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
