import styles from '@/app/ui/models/models.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { roboto } from '@/app/ui/fonts';

export default function ModelAgeGroupCard({
  groupName,
  ageRange,
  images,
}: {
  groupName: string;
  ageRange: string;
  images: Array<string>;
}) {
  const href = `models/${groupName}`;

  return (
    <Link href={href} className={styles['model-age-group-card']}>
      {images.map((image, index) => (
        <Image key={index} src={image} alt="model-photo" width={128} height={260} />
      ))}
      <div className={styles['age-category-card']}>
        <h2 className={styles['age-category-title']}>{groupName}</h2>
        <p className={styles['age-category']}>
          <span className={roboto.className}>{ageRange}</span> років
        </p>
      </div>
    </Link>
  );
}
