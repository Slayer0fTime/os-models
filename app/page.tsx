import Image from 'next/image';
import styles from '@/app/ui/main/main.module.css';
import AchievmentsSection from '@/app/ui/main/achievments';
import TrialLessonSection from './ui/main/trial-lesson';
import FaqSection from './ui/main/faq';
import TeachersSection from './ui/main/teachers-section';
import ProgramophoneSection from './ui/main/programophone-section';
import LocationSection from './ui/main/location-section';
import TrialLessonRegistrationSection from './ui/main/trial-lesson-registration';

export default function Page() {
  return (
    <>
      <div className={styles['site-header-container']}>
        <div className={styles['title-container']}>
          <h1 className={styles['title']}>
            <span>One Step model</span>
            <span>academy</span>
          </h1>
        </div>
      </div>
      <main className={styles.main}>
        <ProgramophoneSection />
        <TeachersSection />
        <AchievmentsSection />
        <TrialLessonSection />
        <LocationSection />
        <TrialLessonRegistrationSection />
        <FaqSection />
      </main>
    </>
  );
}
