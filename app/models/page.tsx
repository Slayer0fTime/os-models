import styles from '@/app/ui/models/models.module.css';
import ModelAgeGroupCard from '@/app/ui/models/model-age-group-card';
import { ageGroups } from '@/app/lib/data/models';

export default function Page() {
  return (
    <main className={styles.main}>
      <section className={styles['model-age-group-cards']}>
        {ageGroups.map((ageGroup) => (
          <ModelAgeGroupCard
            key={ageGroup.name}
            groupName={ageGroup.name}
            ageRange={ageGroup.range}
            images={ageGroup.images}
          />
        ))}
      </section>
    </main>
  );
}
