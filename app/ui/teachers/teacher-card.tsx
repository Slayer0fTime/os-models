import SocialIcon from './social-icon';
import styles from './teachers.module.css';
import Image from 'next/image';

interface TeacherProps {
  image: string;
  fullName: string;
  bio: string;
  speciality: string;
  specialityDescription: string;
  instagram: string;
  facebook: string;
}

export default function TeacherCard({
  image,
  fullName,
  bio,
  speciality,
  specialityDescription,
  instagram,
  facebook,
}: TeacherProps) {
  return (
    <div className={styles['teacher-card']}>
      <div className={styles['teacher-photo-wrapper']}>
        <Image className={styles['teacher-photo']} src={image} alt="teacher-photo" fill />
      </div>
      <div className={styles['teacher-card-details']}>
        <h3 className={styles['teacher-full-name']}>{fullName}</h3>
        <p className={styles['teacher-bio']}>{bio}</p>
        <h4 className={styles['teacher-specialty']}>{speciality}</h4>
        <p className={styles['specialty-description']}>{specialityDescription}</p>
        <div className={styles['teacher-social-icons']}>
          <SocialIcon type="instagram" href={instagram} />
          <SocialIcon type="facebook" href={facebook} />
        </div>
      </div>
    </div>
  );
}
