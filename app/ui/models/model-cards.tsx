'use client';

import { useSearchParams } from 'next/navigation';
import { Model } from '@/app/lib/data/models';
import styles from './our-models.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function ModelCards({ models, ageGroup }: { models: Model[]; ageGroup: string }) {
  const searchParams = useSearchParams();
  const gender = searchParams.get('gender');
  const sort = searchParams.get('sort');

  const preparedModels = models
    .filter((model) => !gender || model.gender === gender)
    .sort((a, b) => a.age - b.age);
  if (sort === 'age-desc') preparedModels.reverse();

  return (
    <div className={styles['model-cards']}>
      {preparedModels.map((model, index) => (
        <Link
          key={model.id}
          href={`/models/${ageGroup}/${model.id}`}
          className={styles['model-card']}>
          <Image
            src={model.image}
            alt="model-photo"
            className={styles['model-photo']}
            width={200}
            height={300}
          />
          <h3 className={styles['model-name']}>{model.name}</h3>
          <div className={styles['model-details']}>
            <p>Вік - {model.age} років</p>
            <p>Зріст - {model.height} см</p>
            <p>Груди - {model.chest} см</p>
            <p>Талія - {model.waist} см</p>
            <p>Стегна - {model.hips} см</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
