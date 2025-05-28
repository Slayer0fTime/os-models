import clsx from 'clsx';
import styles from './main.module.css';
import { teachers } from '@/app/lib/data/teachers';
import { TeacherSlider } from './teacher-slider';

export default function TeachersSection() {
  return (
    <section className={styles['section']}>
      <div className={clsx('container', styles['section-content'])}>
        <div className={styles['section-title']}>
          <h2>Наші викладачі — Ваші емоції</h2>
        </div>

        <div className={styles['teachers-section-content']}>
          <TeacherSlider />

          <div className={styles['teachers-section-description']}>
            <span className={styles['teachers-section-description-title']}>Безліч</span>
            <div className={styles['teachers-section-description-content']}>
              <span>незабутніх</span>
              <span>оригінальних</span>
              <span>цікавих</span>
              <span>яскравих</span>
              <span>атмосферних</span>
              <span>шалених</span>
              <span>нових</span>
              <span>динамічних</span>
              <span>різноманітних</span>
              <span>творчих</span>
            </div>
            <span className={styles['teachers-section-description-title']}>Емоцій</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 
<div className={styles['teacher-cards-wrapper']}>
            <div className={styles['teacher-cards']}>
              <div className={styles['teacher-card']}>
                <img
                  src="https://cdn.pixabay.com/photo/2019/12/11/20/45/girl-4689253_1280.jpg"
                  alt="teacher"
                />
                <div className={styles['teacher-card-details']}>
                  <p className={styles['teacher-card-details-direction']}>Дефіле</p>
                  <h3>Софія Михайлевська</h3>
                </div>
              </div>
              <div className={styles['teacher-card']}>
                <img
                  src="https://cdn.pixabay.com/photo/2019/11/08/11/23/brutal-4611119_1280.jpg"
                  alt="teacher"
                />
                <div className={styles['teacher-card-details']}>
                  <p className={styles['teacher-card-details-direction']}>Акторська майстерність</p>
                  <h3>Дмитро Шевченко</h3>
                </div>
              </div>
              <div className={styles['teacher-card']}>
                <img src="https://images.shafastatic.net/621625145" alt="teacher" />
                <div className={styles['teacher-card-details']}>
                  <p className={styles['teacher-card-details-direction']}>Фотопозування</p>
                  <h3>Вікторія Іванівна</h3>
                </div>
              </div>
              <div className={styles['teacher-card']}>
                <img
                  src="https://c1.wallpaperflare.com/preview/168/402/399/model-rockprincess-cool-makeup.jpg"
                  alt="teacher"
                />
                <div className={styles['teacher-card-details']}>
                  <p className={styles['teacher-card-details-direction']}>Психологія</p>
                  <h3>Олена Петренко</h3>
                </div>
              </div>
              <div className={styles['teacher-card']}>
                <img src="https://images.shafastatic.net/621625145" alt="teacher" />
                <div className={styles['teacher-card-details']}>
                  <p className={styles['teacher-card-details-direction']}>Дефіле</p>
                  <h3>Софія Михайлевська</h3>
                </div>
              </div>
              <div className={styles['teacher-card']}>
                <img src="https://images.shafastatic.net/621625145" alt="teacher" />
                <div className={styles['teacher-card-details']}>
                  <p className={styles['teacher-card-details-direction']}>Акторська майстерність</p>
                  <h3>Дмитро Шевченко</h3>
                </div>
              </div>
            </div>
            <div className={styles['teachers-section-photo-navigation']}>
              <button className={styles['prev-button']}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="22"
                  viewBox="0 0 35 22"
                  fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M34.5 11C34.5 10.6906 34.3721 10.3939 34.1444 10.1752C33.9167 9.9564 33.6078 9.8335 33.2858 9.8335L4.64748 9.8335L12.2897 2.49386C12.5177 2.27482 12.6458 1.97774 12.6458 1.66798C12.6458 1.35821 12.5177 1.06113 12.2897 0.842093C12.0617 0.623055 11.7525 0.500002 11.43 0.500002C11.1076 0.500002 10.7984 0.623055 10.5704 0.842093L0.856719 10.1741C0.743645 10.2825 0.653932 10.4112 0.59272 10.5529C0.531508 10.6946 0.5 10.8466 0.5 11C0.5 11.1534 0.531508 11.3054 0.59272 11.4471C0.653932 11.5888 0.743645 11.7175 0.856719 11.8259L10.5704 21.1579C10.6833 21.2664 10.8173 21.3524 10.9648 21.4111C11.1123 21.4698 11.2704 21.5 11.43 21.5C11.7525 21.5 12.0617 21.3769 12.2897 21.1579C12.5177 20.9389 12.6458 20.6418 12.6458 20.332C12.6458 20.0223 12.5177 19.7252 12.2897 19.5061L4.64748 12.1665L33.2858 12.1665C33.6078 12.1665 33.9167 12.0436 34.1444 11.8248C34.3721 11.6061 34.5 11.3094 34.5 11Z"
                    fill="#9B71B3"
                  />
                </svg>
              </button>
              <span className={styles['pagination']}>1/1</span>
              <button className={styles['next-button']}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="22"
                  viewBox="0 0 35 22"
                  fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.499999 11C0.499999 11.3094 0.627921 11.6061 0.855632 11.8248C1.08334 12.0436 1.39218 12.1665 1.71421 12.1665L30.3525 12.1665L22.7103 19.5061C22.4823 19.7252 22.3542 20.0223 22.3542 20.332C22.3542 20.6418 22.4823 20.9389 22.7103 21.1579C22.9383 21.3769 23.2475 21.5 23.57 21.5C23.8924 21.5 24.2016 21.3769 24.4296 21.1579L34.1433 11.8259C34.2564 11.7175 34.3461 11.5888 34.4073 11.4471C34.4685 11.3054 34.5 11.1534 34.5 11C34.5 10.8466 34.4685 10.6946 34.4073 10.5529C34.3461 10.4112 34.2564 10.2825 34.1433 10.1741L24.4296 0.842091C24.3167 0.733634 24.1827 0.647602 24.0352 0.588906C23.8877 0.53021 23.7296 0.499999 23.57 0.499999C23.2475 0.499999 22.9383 0.623053 22.7103 0.842091C22.4823 1.06113 22.3542 1.35821 22.3542 1.66798C22.3542 1.97774 22.4823 2.27482 22.7103 2.49386L30.3525 9.8335L1.71421 9.83349C1.39218 9.83349 1.08334 9.95639 0.855632 10.1752C0.627921 10.3939 0.499999 10.6906 0.499999 11Z"
                    fill="#9B71B3"
                  />
                </svg>
              </button>
            </div>
          </div>
*/
