import styles from '@/app/ui/events/events.module.css';
import Filters from '@/app/ui/events/filters';
import EventCards from '../ui/events/event-cards';
import { Suspense } from 'react';

export default function Page() {
  return (
    <main className={styles['main']}>
      <section className={`container ${styles['section']}`}>
        <h2 className={styles['section-title']}>Події нашої академії</h2>
        <Suspense>
          <Filters />
          <EventCards />
        </Suspense>
      </section>
    </main>
  );
}
