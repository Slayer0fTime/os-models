import styles from '@/app/ui/models/our-models.module.css';
import Filters from '@/app/ui/models/filters';
import ModelCards from '@/app/ui/models/model-cards';
import { ModelsByAgeGroup } from '@/app/lib/data/models';

export default async function Page({ params }: { params: Promise<{ ageGroup: keyof ModelsByAgeGroup }> }) {
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
