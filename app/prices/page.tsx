import styles from '@/app/ui/prices/prices.module.css';
import clsx from 'clsx';
import { roboto, inter } from '../ui/fonts';
import BulletIcon from '../ui/prices/bullet-icon';
import PaymentCard from '../ui/prices/payment-card';

export default function Page() {
  return (
    <main className={styles['main']}>
      <section className={clsx('container', styles['section'])}>
        <h2 className={styles['section-title']}>Ціни</h2>
        <div className={styles['prices-grid']}>
          <div className={styles['trial-lesson-container']}>
            <div className={styles['trial-lesson-card']}>
              <div className={styles['trial-lesson-card-header']}>
                <h3>Пробне заняття</h3>
                <strong>БЕЗКОШТОВНО</strong>
              </div>
              <div className={styles['trial-lesson-card-info']}>
                <p>
                  <span className={inter.className}>2-3 </span>
                  години
                </p>
                <a href="#">Записатись</a>
              </div>
            </div>

            <ul className={styles['course-info']}>
              {[
                'Курс навчання - 9 місяців',
                'За курс проводиться 2-3 покази, які потребують додаткової доплати',
                'По завершенню курсу, ви отримаєте сертіфікат',
              ].map((text, index) => (
                <li key={index}>
                  <span className={styles['bullet-icon']}>
                    <BulletIcon />
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles['subscription-card']}>
            <h3>Абонемент на місяць</h3>
            <p className={styles['subscription-description']}>Включає:</p>
            <ul>
              <li>
                8 занять в які входить по 2 предмета зі списку:
                <ol className={styles['subjects-list']}>
                  {[
                    'Дефіле',
                    'Акторська майстерність',
                    'Психологія',
                    'Візаж',
                    'Стиль',
                    'Фотопозування',
                    'Хореографія',
                    'Теорія моделінга',
                    'Введення Tik-tok',
                    'Всесвіт моделі',
                  ].map((subject, index) => (
                    <li key={index}>
                      <span className={roboto.className}>{index + 1}. </span>
                      {subject}
                    </li>
                  ))}
                </ol>
              </li>
              <li>1-2 фотосесії</li>
              <p className={roboto.className}>Одне заняття = два предмета = по 1.5 години</p>
            </ul>
            <p className={clsx(inter.className, styles['subscription-card-price'])}>3 400 грн.</p>
          </div>

          <div className={styles['payment-cards-container']}>
            <PaymentCard months={3} originalPrice="12 000" discountPrice="8 600" discount={15} />
            <PaymentCard months={4} originalPrice="13 600" discountPrice="10 900" discount={20} />
            <div className={styles['payment-card-single-session']}>
              <h3>Разове заняття</h3>
              <p className={styles['single-session-description']}>
                Входить<span className={roboto.className}> 2</span> урока по
                <span className={roboto.className}> 1.5</span> години
              </p>
              <p className={clsx(inter.className, styles['single-session-price'])}>480 грн.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
