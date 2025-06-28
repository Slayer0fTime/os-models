import styles from '@/app/ui/models/our-models.module.css';
import Filters from '@/app/ui/models/filters';
import ModelCards from '@/app/ui/models/model-cards';
import { modelsByAgeGroup, ModelsByAgeGroup } from '@/app/lib/data/models';
import { notFound } from 'next/navigation';
import { clsx } from 'clsx';

export default async function Page({ params }: { params: Promise<{ ageGroup: string }> }) {
  const { ageGroup } = await params;
  const models = modelsByAgeGroup[ageGroup as keyof ModelsByAgeGroup];
  if (!models) {
    notFound();
  }

  return (
    <main className={styles['main']}>
      <section className={styles['section']}>
        <div className={clsx('container', styles['section-content'])}>
          <h2 className={styles['section-title']}>Наші моделі</h2>
          <Filters />
          <ModelCards models={models} ageGroup={ageGroup} />
        </div>
      </section>
    </main>
  );
}
