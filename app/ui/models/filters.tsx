'use client';

import styles from '@/app/ui/models/our-models.module.css';
import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import AgeDropdown from './age-dropdown';
import AscendingIcon from '@/app/ui/icons/ascending-icon';
import DescendingIcon from '@/app/ui/icons/descending-icon';

const genderOpitons = [
  { href: 'male', name: 'Хлопчики' },
  { href: 'female', name: 'Дівчата' },
];

export default function Filters() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentSort = searchParams.get('sort');
  const currentGender = searchParams.get('gender');

  const isAscending = currentSort !== 'age-desc';

  const getSortUrl = (sortValue: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('sort', sortValue);
    return `${pathname}?${params.toString()}`;
  };

  const getGenderUrl = (genderValue: string) => {
    const params = new URLSearchParams(searchParams);
    if (genderValue === currentGender) {
      params.delete('gender');
    } else {
      params.set('gender', genderValue);
    }
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className={styles['filters']}>
      <div className={styles['filter-sidebar']}>
        <Link
          className={styles['sort-by-age-btn']}
          href={getSortUrl(isAscending ? 'age-desc' : 'age-asc')}>
          Вік
          {isAscending ? <AscendingIcon /> : <DescendingIcon />}
        </Link>

        <div className={styles['filter-by-gender']}>
          {genderOpitons.map((gender, index) => (
            <Link
              key={index}
              className={clsx(styles['gender-filter-btn'], {
                [styles.active]: gender.href === currentGender,
              })}
              href={getGenderUrl(gender.href)}>
              {gender.name}
            </Link>
          ))}
        </div>
      </div>
      <AgeDropdown />
    </div>
  );
}
