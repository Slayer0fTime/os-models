import styles from './teachers.module.css';
import {teachers} from '@/app/lib/data/teachers'
import TeacherCard from './teacher-card'

export default function TeacherCards() {
  return (
    <div className={styles['teacher-cards']}>
      {teachers.map((teacher, index) => (
        <TeacherCard {...teacher}/>
      ))}
    </div>
  );
}
