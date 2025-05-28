import styles from '@/app/ui/models/our-models.module.css';
import Filters from '@/app/ui/models/filters';
import ModelCards from '@/app/ui/models/model-cards';

export default async function Page({ params }: { params: Promise<{ ageGroup: string }> }) {
  return (
    <main className={styles['main']}>
      <section className={styles['section']}>
        <div className={`container ${styles['section-content']}`}>
          <h2 className={styles['section-title']}>Наші моделі</h2>
          <Filters />
          <ModelCards ageGroup={(await params).ageGroup} />
        </div>
      </section>
    </main>
  );
}
