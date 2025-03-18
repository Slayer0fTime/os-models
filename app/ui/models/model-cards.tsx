'use client';

import { notFound, useSearchParams } from 'next/navigation';
import { modelsByAgeGroup } from './data';
import styles from './our-models.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function ModelCards({ ageGroup }: { ageGroup: string }) {
  const models = modelsByAgeGroup[ageGroup]; //[ageGroup as keyof typeof modelsByAgeGroup]
  if (!models) {
    return notFound();
  } 

  const searchParams = useSearchParams();
  const genderFilter = searchParams.get('gender');
  const filteredModels = genderFilter
    ? models.filter((model) => model.gender === genderFilter)
    : models;

  return (
    <div className={styles['model-cards']}>
      {filteredModels.map((model, index) => (
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
