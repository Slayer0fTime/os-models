'use client';

import styles from '@/app/ui/models/our-models.module.css';
import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import AgeDropdown from './age-dropdown';

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

function AscendingIcon() {
  return (
    <svg width="9" height="17" viewBox="0 0 9 17" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.5 17C4.63259 17 4.75975 16.936 4.85351 16.8222C4.94726 16.7083 4.99993 16.5539 4.99993 16.3929L4.99993 2.07374L8.14549 5.89485C8.23936 6.00885 8.36669 6.07289 8.49944 6.07289C8.6322 6.07289 8.75952 6.00885 8.85339 5.89485C8.94727 5.78085 9 5.62624 9 5.46502C9 5.3038 8.94727 5.14919 8.85339 5.03519L4.85395 0.178359C4.80751 0.121821 4.75234 0.076965 4.69161 0.0463592C4.63087 0.0157533 4.56576 -7.98303e-07 4.5 -7.86805e-07C4.43424 -7.75308e-07 4.36913 0.0157533 4.30839 0.0463592C4.24766 0.0769651 4.19249 0.121821 4.14605 0.178359L0.146612 5.03519C0.10013 5.09164 0.0632595 5.15865 0.0381039 5.2324C0.0129484 5.30615 9.41577e-07 5.3852 9.55535e-07 5.46502C9.83723e-07 5.62624 0.0527385 5.78085 0.146612 5.89485C0.240485 6.00885 0.367805 6.07289 0.500563 6.07289C0.63332 6.07289 0.76064 6.00885 0.854513 5.89485L4.00007 2.07374L4.00007 16.3929C4.00007 16.5539 4.05275 16.7083 4.1465 16.8222C4.24026 16.936 4.36741 17 4.5 17Z"
        fill="#9B71B3"
      />
    </svg>
  );
}

function DescendingIcon() {
  return (
    <svg width="9" height="17" viewBox="0 0 9 17" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.5 -3.93403e-07C4.36741 -4.04994e-07 4.24025 0.0639606 4.1465 0.177816C4.05274 0.291669 4.00007 0.446088 4.00007 0.607103L4.00007 14.9263L0.854511 11.1051C0.760637 10.9911 0.633317 10.9271 0.50056 10.9271C0.367803 10.9271 0.240483 10.9911 0.14661 11.1051C0.0527358 11.2191 -1.41549e-06 11.3738 -1.42958e-06 11.535C-1.44368e-06 11.6962 0.0527358 11.8508 0.14661 11.9648L4.14605 16.8216C4.19249 16.8782 4.24766 16.923 4.30839 16.9536C4.36913 16.9842 4.43424 17 4.5 17C4.56576 17 4.63087 16.9842 4.69161 16.9536C4.75234 16.923 4.80751 16.8782 4.85395 16.8216L8.85339 11.9648C8.89987 11.9084 8.93674 11.8414 8.9619 11.7676C8.98705 11.6939 9 11.6148 9 11.535C9 11.3738 8.94726 11.2191 8.85339 11.1051C8.75952 10.9911 8.6322 10.9271 8.49944 10.9271C8.36668 10.9271 8.23936 10.9911 8.14549 11.1051L4.99993 14.9263L4.99993 0.607103C4.99993 0.446088 4.94726 0.291669 4.8535 0.177816C4.75975 0.0639607 4.63259 -3.81811e-07 4.5 -3.93403e-07Z"
        fill="#9B71B3"
      />
    </svg>
  );
}
