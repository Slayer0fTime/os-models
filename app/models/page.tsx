import styles from '@/app/ui/models/models.module.css';
import ModelAgeGroupCard from '@/app/ui/models/model-age-group-card';

const ageGroups = [
  {
    name: 'kids',
    range: '5 - 8',
    images: ['/models/kids1.jpg', '/models/kids2.jpg', '/models/kids1.jpg'],
  },
  {
    name: 'juniors',
    range: '9 - 12',
    images: ['/models/kids1.jpg', '/models/kids1.jpg', '/models/kids1.jpg'],
  },
  {
    name: 'teens',
    range: '13 - 17',
    images: ['/models/kids2.jpg', '/models/kids2.jpg', '/models/kids2.jpg'],
  },
];

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
