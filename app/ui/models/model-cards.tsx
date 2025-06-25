'use client';

import { notFound, useSearchParams } from 'next/navigation';
import { modelsByAgeGroup, ModelsByAgeGroup } from '@/app/lib/data/models';
import styles from './our-models.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function ModelCards({ ageGroup }: { ageGroup: keyof ModelsByAgeGroup }) {
  const models = modelsByAgeGroup[ageGroup];
  if (!models) {
    return notFound();
  }

  const searchParams = useSearchParams();
  const gender = searchParams.get('gender');
  const sort = searchParams.get('sort');

  const filtered = gender ? models.filter((model) => model.gender === gender) : models;

  const sorted = [...filtered].sort((a, b) => {
    switch (sort) {
      case 'age-desc':
        return b.age - a.age;
      case 'age-asc':
      default:
        return a.age - b.age;
    }
  });

  return (
    <div className={styles['model-cards']}>
      {sorted.map((model, index) => (
        <Link key={index} href={`/models/${ageGroup}/${model.id}`} className={styles['model-card']}>
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
