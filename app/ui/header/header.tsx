import styles from './header.module.css';
import Image from 'next/image';
import NavLinks from './nav-links';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContent}`}>
        <Image
          src="/logo.svg"
          width={50}
          height={50}
          alt="logo"
          loading="eager"
        />
        <nav>
          <NavLinks />
          {/* <button
            onclick="showSidebar()"} className={styles['burger-menu-btn']}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 29 19"
              fill="none">
              <path
                d="M0 19V17.1973H29V19H0ZM0 10.4013V8.59867H29V10.4013H0ZM0 1.80266V0H29V1.80266H0Z"
                fill="white"
              />
            </svg>
          </button> */}

          {/* <div className={styles.sidebar}>
            <button
              onclick="hideSidebar()" className={styles['close-menu-btn']}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 31 31"
                fill="none">
                <path
                  d="M1 1L30 30"
                  stroke="#252525"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1 30L30 1"
                  stroke="#252525"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <ul>
              <li>
                <a href="./">Головна</a>
              </li>
              <li>
                <a href="models/">Моделі</a>
              </li>
              <li>
                <a href="teachers/">Викладачі</a>
              </li>
              <li>
                <a href="events/">Події</a>
              </li>
              <li>
                <a href="prices/">Ціни</a>
              </li>
              <li>
                <a href="contacts/">Контакти</a>
              </li>
            </ul>
          </div> */}
        </nav>
      </div>
    </header>
  );
}
