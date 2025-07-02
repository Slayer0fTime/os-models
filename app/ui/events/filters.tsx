'use client';

import styles from '@/app/ui/events/events.module.css';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import clsx from 'clsx';
import AscendingIcon from '@/app/ui/icons/ascending-icon';
import DescendingIcon from '@/app/ui/icons/descending-icon';

const eventTypes = [
  { href: 'shows', name: 'Покази' },
  { href: 'photo-projects', name: 'Фотопроекти' },
];

export default function Filters() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentOrder = searchParams.get('order');
  const currentType = searchParams.get('type');
  const isNewestFirst = currentOrder !== 'oldest';

  const getOrderUrl = (orderValue: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('order', orderValue);
    return `${pathname}?${params.toString()}`;
  };

  const getTypeUrl = (selectedType: string) => {
    const params = new URLSearchParams(searchParams);
    if (selectedType === currentType) {
      params.delete('type');
    } else {
      params.set('type', selectedType!);
    }
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className={styles['filters']}>
      <Link
        className={styles['sort-by-date-button']}
        href={getOrderUrl(isNewestFirst ? 'oldest' : 'newest')}>
        Дата публікації
        {isNewestFirst ? <DescendingIcon /> : <AscendingIcon />}
      </Link>
      <div className={styles['filter-event-type']}>
        {eventTypes.map((type, index) => (
          <Link
            key={index}
            className={clsx(styles['event-type-btn'], {
              [styles.active]: type.href === currentType,
            })}
            href={getTypeUrl(type.href)}>
            {type.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
