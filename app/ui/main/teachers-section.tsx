import clsx from 'clsx';
import styles from './main.module.css';
import { teachers } from '@/app/lib/data/teachers';
import { TeacherSlider } from './teacher-slider';

export default function TeachersSection() {
  return (
    <section className={styles['section']}>
      <div className={clsx('container', styles['section-content'])}>
        <div className={styles['section-title']}>
          <h2>Наші викладачі — Ваші емоції</h2>
        </div>

        <div className={styles['teachers-section-content']}>
          <TeacherSlider />

          <div className={styles['teachers-section-description']}>
            <span className={styles['teachers-section-description-title']}>Безліч</span>
            <div className={styles['teachers-section-description-content']}>
              <span>незабутніх</span>
              <span>оригінальних</span>
              <span>цікавих</span>
              <span>яскравих</span>
              <span>атмосферних</span>
              <span>шалених</span>
              <span>нових</span>
              <span>динамічних</span>
              <span>різноманітних</span>
              <span>творчих</span>
            </div>
            <span className={styles['teachers-section-description-title']}>Емоцій</span>
          </div>
        </div>
      </div>
    </section>
  );
}
