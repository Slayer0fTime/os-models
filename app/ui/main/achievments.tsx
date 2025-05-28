import styles from './main.module.css';
import {roboto} from '@/app/ui/fonts'

export default function AchievmentsSection() {
  return (
    <section className={styles['section']}>
      <div className={`container ${styles['section-content']}`}>
        <div className={styles['section-title']}>
          <h2>Ваші досягнення</h2>
        </div>
        <div className={styles['achievements-section-content']}>
          <span>Снепи</span>
          <span>Розвиток особистості</span>
          <span>9+ професійних фотосесій</span>
          <span>Нові знайомства</span>
          <span>Вміння розбирати тренди</span>
          <span>
            <span className={roboto.className}>5+&nbsp</span>
            показів
          </span>
          <span>Кастинг</span>
          <span>Контроль над тілом</span>
          <span>Можливість підписати контракт з міжнародним букером</span>
          <span>Сертифікат випускника академії</span>
        </div>
      </div>
    </section>
  );
}
