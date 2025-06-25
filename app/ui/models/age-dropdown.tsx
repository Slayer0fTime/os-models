'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ageGroups } from '@/app/lib/data/models';
import styles from '@/app/ui/models/our-models.module.css';
import { roboto } from '../fonts';
import { useState, useRef, useEffect } from 'react';

export default function AgeDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const currentGroupName = pathname.split('/').pop();
  const currentGroup = ageGroups.find((group) => group.name === currentGroupName);
  const otherGroups = ageGroups.filter((group) => group.name !== currentGroupName);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className={styles['age-dropdown']} ref={dropdownRef}>
      <button className={styles['age-category']} onClick={() => setIsOpen(!isOpen)}>
        <span>
          <span className={roboto.className}>{currentGroup?.range} </span>
          років
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="9"
          viewBox="0 0 17 9"
          fill="none">
          <path
            d={isOpen ? 'M16 7.5L8.5 1.5L1 7.5' : 'M1 1.5L8.5 7.5L16 1.5'}
            stroke="#9B71B3"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div className={styles['age-dropdown-list']}>
          {otherGroups.map((group) => (
            <Link key={group.name} href={`/models/${group.name}`} className={styles['age-option']}>
              <span className={roboto.className}>{group.range}</span> років
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
