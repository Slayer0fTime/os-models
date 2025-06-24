import clsx from 'clsx';
import styles from './main.module.css';
import Image from 'next/image';

export default function LocationSection() {
  return (
    <section className={styles['section']}>
      <div className={clsx('container', styles['section-content'])}>
        <div className={styles['section-title']}>
          <h2>10 метрів від метро</h2>
        </div>
        <div className={styles['location-section-content']}>
          <a
            className={styles['location-map']}
            target="_blank"
            href="https://www.google.com/maps/place/Vasylkivska+St,+34,+Kyiv,+02000/@50.3935707,30.4825893,17z/data=!3m1!4b1!4m6!3m5!1s0x40d4c8daee2e02bd:0x309b0427b63c50c6!8m2!3d50.3935673!4d30.4851696!16s%2Fg%2F11c43wgmfb?entry=ttu&g_ep=EgoyMDI1MDUyNy4wIKXMDSoASAFQAw%3D%3D">
            <Image alt="Location" src="/main/location.png" fill style={{ objectFit: 'cover' }} />
          </a>
          <div className={styles['location-info']}>
            <p>Васильківська вул. 34</p>
            <p>станція м.“Васильківська”</p>
          </div>
        </div>
      </div>
    </section>
  );
}
