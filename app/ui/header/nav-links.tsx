'use client';

import styles from './header.module.css';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

export default function NavLinks({ links }: { links: { name: string; href: string }[] }) {
  const pathname = usePathname();

  return (
    <ul>
      {links.map((link, index) => {
        const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);

        return (
          <li key={index}>
            <Link href={link.href} className={clsx({ [styles.selected]: isActive })}>
              {link.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
