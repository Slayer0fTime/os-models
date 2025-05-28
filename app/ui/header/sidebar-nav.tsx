import styles from './header.module.css';
import Link from 'next/link';

export default function SidebarNav({
  links,
  onClose,
}: {
  links: { name: string; href: string }[];
  onClose: () => void;
}) {
  return (
    <div className={styles.sidebar}>
      <button className={styles['close-menu-btn']} onClick={onClose}>
        <svg viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L30 30" stroke="#252525" strokeWidth="2" strokeLinecap="round" />
          <path d="M1 30L30 1" stroke="#252525" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href} onClick={onClose}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
