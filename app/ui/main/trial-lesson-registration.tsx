import { roboto } from '../fonts';
import styles from './main.module.css';

export default function TrialLessonRegistrationSection() {
  return (
    <section className={styles['section']}>
      <div className={styles['registration-trial-lesson-container']}>
        <div className={styles['registration-trial-lesson']}>
          <div className={styles['registration-trial-lesson-card']}>
            <div className={styles['registration-trial-lesson-card-header']}>
              <h3>Запишись на пробне заняття</h3>
              <b>Безкоштовно</b>
            </div>
            <div className={styles['registration-trial-lesson-card-model-info']}>
              <input type="text" placeholder="Ім'я моделі" />
              <input type="text" placeholder="Вік моделі" />
              <input type="text" placeholder="Прізвище моделі" />
              <input type="tel" placeholder="Номер телефону" />
              <p className={styles['registration-trial-lesson-card-timestamp']}>
                Оберіть дату та час заняття:
              </p>
              <div className={styles['timestamp-buttons']}>
                <button>
                  <span>05.01.2024</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="8"
                    viewBox="0 0 9 8"
                    fill="none">
                    <path
                      d="M4.84641 6.9C4.69245 7.16667 4.30755 7.16667 4.15359 6.9L0.949295 1.35C0.795334 1.08333 0.987785 0.75 1.29571 0.75L7.70429 0.750001C8.01222 0.750001 8.20466 1.08333 8.0507 1.35L4.84641 6.9Z"
                      fill="#252525"
                    />
                  </svg>
                </button>
                <button>
                  <span>12:00 - 16:00</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="8"
                    viewBox="0 0 9 8"
                    fill="none">
                    <path
                      d="M4.84641 6.9C4.69245 7.16667 4.30755 7.16667 4.15359 6.9L0.949295 1.35C0.795334 1.08333 0.987785 0.75 1.29571 0.75L7.70429 0.750001C8.01222 0.750001 8.20466 1.08333 8.0507 1.35L4.84641 6.9Z"
                      fill="#252525"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <button className={styles['registration-trial-lesson-button']}>Записатись</button>
        </div>

        <div className={styles['trial-lesson-price-container']}>
          <div className={styles['trial-lesson-price-cards']}>
            <PaymentCard months={3} originalPrice="12 000" discountPrice="8 600" discount={15} />
            <PaymentCard months={4} originalPrice="13 600" discountPrice="10 900" discount={20} />
          </div>

          <button className={styles['trial-lesson-event-learn-more-btn']}>
            <span>Дізнатись більше</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M-0.00089379 4.49965C-0.000893795 4.63226 0.0517843 4.75944 0.145552 4.85321C0.239321 4.94698 0.366498 4.99965 0.499106 4.99965L12.2921 4.99965L9.14511 8.14565C9.05122 8.23954 8.99847 8.36688 8.99847 8.49965C8.99847 8.63243 9.05122 8.75977 9.14511 8.85365C9.23899 8.94754 9.36633 9.00029 9.49911 9.00029C9.63188 9.00029 9.75922 8.94754 9.85311 8.85365L13.8531 4.85365C13.8997 4.80721 13.9366 4.75203 13.9618 4.69129C13.987 4.63054 14 4.56542 14 4.49965C14 4.43389 13.987 4.36877 13.9618 4.30802C13.9366 4.24728 13.8997 4.1921 13.8531 4.14565L9.85311 0.145655C9.80662 0.0991668 9.75143 0.0622907 9.69069 0.0371316C9.62995 0.0119725 9.56485 -0.000976756 9.49911 -0.000976759C9.36633 -0.000976765 9.23899 0.0517681 9.14511 0.145655C9.05122 0.239541 8.99847 0.366879 8.99847 0.499655C8.99847 0.632431 9.05122 0.759768 9.14511 0.853655L12.2921 3.99965L0.499106 3.99965C0.366498 3.99965 0.239321 4.05233 0.145552 4.1461C0.0517843 4.23987 -0.000893784 4.36705 -0.00089379 4.49965Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

function PaymentCard({
  months,
  originalPrice,
  discountPrice,
  discount,
}: {
  months: number;
  originalPrice: string;
  discountPrice: string;
  discount: number;
}) {
  return (
    <div className={styles['trial-lesson-price-card']}>
      <h3>
        Оплата за <span className={roboto.className}>{months}</span> місяці
      </h3>
      <div className={styles['price-container']}>
        <div className={styles['price']}>
          <p className={styles['original-price']}>{originalPrice} грн.</p>
          <p className={styles['discounted-price']}>{discountPrice} грн.</p>
        </div>
        <strong className={styles['discount-info']}>
          <span className={roboto.className}>{discount}%</span> економії
        </strong>
      </div>
    </div>
  );
}
