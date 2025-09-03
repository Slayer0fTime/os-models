import clsx from 'clsx';
import styles from './main.module.css';
import Image from 'next/image';
import locationImage from '@/public/main/location.png';
import Location from '@/app/ui/location';

export default function LocationSection() {
  return (
    <section className={styles['section']}>
      <div className={clsx('container', styles['section-content'])}>
        <div className={styles['section-title']}>
          <h2>5-7 хвилин від метро</h2>
        </div>
        <div className={styles['location-section-content']}>
          <Location />
        </div>
      </div>
    </section>
  );
}
