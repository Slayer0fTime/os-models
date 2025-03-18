import { getModelById } from '@/app/lib/data/models';
import { notFound } from 'next/navigation';
import styles from '@/app/ui/models/model-portfolio.module.css';
import Image from 'next/image';

export default function Page({ params }: { params: { ageGroup: string; id: string } }) {
  const { ageGroup, id } = params;
  const model = getModelById(ageGroup, id);

  if (!model) {
    return notFound();
  }

  return (
    <main className={styles['main']}>
      <section className={styles['section']}>
        <div className={`container ${styles['section-content']}`}>
          <h2 className={styles['section-title']}>Портфоліо моделі</h2>
          <h3 className={styles['model-full-name']}>{model.name}</h3>
          <ul className={styles['model-details']}>
            <li>Вік - {model.age} років</li>
            <li>Зріст - {model.height} см</li>
            <li>Груди - {model.chest} см</li>
            <li>Талія - {model.waist} см</li>
            <li>Стегна - {model.hips} см</li>
          </ul>
          <div className={styles['model-photo']}>
            {model.gallery.map((src, indexed) => (
              <div className={styles['model-photo-wrapper']}>
                <Image key={indexed} src={src} alt="model-photo" fill objectFit="cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
