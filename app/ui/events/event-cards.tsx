'use client';

import styles from '@/app/ui/events/events.module.css';
import { events } from '@/app/lib/data/events';
import Link from 'next/link';
import Image from 'next/image';
import { roboto } from '../fonts';
import { useSearchParams } from 'next/navigation';

export default function EventCards() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type');
  const order = searchParams.get('order');

  const preparedEvents = events
    .filter((event) => !type || event.type === type)
    .sort((a, b) => b.date.localeCompare(a.date));
  if (order === 'oldest') preparedEvents.reverse();

  return (
    <div className={styles['event-grid']}>
      {preparedEvents.map((event) => (
        <Link key={event.id} href={`events/${event.id}`} className={styles['event-card']}>
          <div className={styles['event-photo-wrapper']}>
            <Image
              src={event.image}
              alt="event-photo"
              className={styles['event-image']}
              objectFit="cover"
              fill
            />
          </div>
          <div className={styles['event-card-details']}>
            <h3 className={styles['event-title']}>{event.title}</h3>
            <p className={styles['event-description']}>{event.shortDescription}</p>
            <span
              className={`${roboto.className} ${styles['event-date']}`}
              style={{ fontWeight: '100' }}>
              {event.date}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
