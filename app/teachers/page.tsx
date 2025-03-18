import styles from '@/app/ui/teachers/teachers.module.css';
import TeacherCards from '@/app/ui/teachers/teacher-cards';

export default function Page() {
  return (
    <main className={styles['main']}>
      <section className={styles['section']}>
        <div className={`container ${styles['section-content']}`}>
          <h2 className={styles['section-title']}>Наші викладачі</h2>
          <TeacherCards />
        </div>
      </section>
    </main>
  );
}
