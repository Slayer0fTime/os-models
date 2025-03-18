import styles from '@/app/ui/prices/prices.module.css';

export default function Page() {
  return (
    <main className={styles['main']}>
      <section className={`container ${styles['section']}`}>
        <h2 className={styles['section-title']}>Ціни</h2>
        <div className={styles['prices-grid']}>
          <button className={styles['age-category']}>
            <span>
              TEENS
              <span className={styles['roboto-font']}>13 - 17 </span>років
            </span>
            <svg
              width="17"
              height="9"
              viewBox="0 0 17 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 1.5L8.5 7.5L16 1.5"
                stroke="#9B71B3"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </button>
          <div className={styles['trial-lesson-container']}>
            <div className={styles['trial-lesson-card']}>
              <div className={styles['trial-lesson-card-header']}>
                <h3>Пробне заняття</h3>
                <strong>БЕЗКОШТОВНО</strong>
              </div>
              <div className={styles['trial-lesson-card-info']}>
                <time /* datetime="PT2H"*/>
                  <span className={styles['inter-font']}>2-3</span>
                  години
                </time>
                <a href="#">Записатись</a>
              </div>
            </div>
            <ul className={styles['course-info']}>
              <li>Курс навчання - 9 місяців</li>
              <li>За курс проводиться 2-3 покази, які потребують додаткової доплати</li>
              <li>По завершенню курсу, ви отримаєте сертіфікат</li>
            </ul>
          </div>

          <div className={styles['subscription-card']}>
            <h3>Абонемент на місяць</h3>
            <p className={styles['subscription-description']}>Включає:</p>
            <ul>
              <li>
                8 занять в які входить по 2 предмета зі списку:
                <ol className={styles['subjects-list']}>
                  <li>
                    <span className={styles['roboto-font']}>1. </span>
                    Дефіле
                  </li>
                  <li>
                    <span className={styles['roboto-font']}>2. </span>
                    Акторська майстерність
                  </li>
                  <li>
                    <span className={styles['roboto-font']}>3. </span>Психологія
                  </li>
                  <li>
                    <span className={styles['roboto-font']}>4. </span>Візаж
                  </li>
                  <li>
                    <span className={styles['roboto-font']}>5. </span>Стиль
                  </li>
                  <li>
                    <span className={styles['roboto-font']}>6. </span>Фотопозування
                  </li>
                  <li>
                    <span className={styles['roboto-font']}>7. </span>Хореографія
                  </li>
                  <li>
                    <span className={styles['roboto-font']}>8. </span>Теорія моделінга
                  </li>
                  <li>
                    <span className={styles['roboto-font']}>9. </span>Введення Tik-tok
                  </li>
                  <li>
                    <span className={styles['roboto-font']}>10. </span>Всесвіт моделі
                  </li>
                </ol>
              </li>
              <li>1-2 фотосесії</li>
              <li className={styles['roboto-font']}>Одне заняття = два предмета = по 1.5 години</li>
            </ul>

            <div className={styles['subscription-card-price-and-registration']}>
              <span className={styles['inter-font']}>3 400 грн.</span>
              <a href="#">Записатись</a>
            </div>
          </div>

          <div className={styles['payment-cards-container']}>
            <div className={styles['payment-card']}>
              <h3>
                Оплата за
                <span className={styles['roboto-font']}>3</span> місяці
              </h3>
              <div className={styles['price-container']}>
                <div className={styles['price']}>
                  <span className={styles['original-price']}>12 000 грн.</span>
                  <span className={styles['discounted-price']}>8 600 грн.</span>
                </div>
                <strong className={styles['discount-info']}>
                  <span className={styles['roboto-font']} /*style="font-weight: 400"*/>15%</span>
                  економії
                </strong>
              </div>
            </div>
            <div className={styles['payment-card']}>
              <h3>
                Оплата за
                <span className={styles['roboto-font']}>4</span> місяці
              </h3>
              <div className={styles['price-container']}>
                <div className={styles['price']}>
                  <span className={styles['original-price']}>13 600 грн.</span>
                  <span className={styles['discounted-price']}>10 900 грн.</span>
                </div>
                <strong className={styles['discount-info']}>
                  <span className={styles['roboto-font']} /*style="font-weight: 400"*/>20%</span>
                  економії
                </strong>
              </div>
            </div>
            <div className={styles['payment-card-single-session']}>
              <h3>Разове заняття</h3>
              <p>
                Входить <span className={styles['roboto-font']}>2</span> урока по{' '}
                <span className={styles['roboto-font']}>1.5</span> години
              </p>
              <div className={styles['single-session-price-and-registration']}>
                <span className={styles['inter-font']}>480 грн.</span>
                <a href="#">Записатись</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
