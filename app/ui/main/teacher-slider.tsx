'use client';

import { useState, useEffect } from 'react';
import styles from './main.module.css';
import { teachers } from '@/app/lib/data/teachers';
import Image from 'next/image';

export function TeacherSlider() {
  const [page, setPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 480px)');

    const updateCardsPerPage = (e: MediaQueryList | MediaQueryListEvent) => {
      setCardsPerPage(e.matches ? 4 : 6);
      setPage(0);
    };

    updateCardsPerPage(mediaQuery);
    mediaQuery.addEventListener('change', updateCardsPerPage);
    return () => {
      mediaQuery.removeEventListener('change', updateCardsPerPage);
    };
  }, []);

  const totalPages = Math.ceil(teachers.length / cardsPerPage);

  const handlePrev = () => {
    if (page > 0) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  const currentTeachers = teachers.slice(page * cardsPerPage, page * cardsPerPage + cardsPerPage);

  return (
    <div className={styles['teacher-cards-wrapper']}>
      <div className={styles['teacher-cards']}>
        {currentTeachers.map((teacher, index) => (
          <TeacherCard
            key={index}
            image={teacher.image}
            fullName={teacher.fullName}
            speciality={teacher.speciality}
          />
        ))}
      </div>

      <div className={styles['teachers-section-photo-navigation']}>
        <button className={styles['prev-button']} onClick={handlePrev} disabled={page === 0}>
          <ArrowLeftIcon />
        </button>
        <span className={styles.pagination}>
          {page + 1}/{totalPages}
        </span>
        <button
          className={styles['next-button']}
          onClick={handleNext}
          disabled={page === totalPages - 1}>
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
}

function TeacherCard({
  image,
  fullName,
  speciality,
}: {
  image: string;
  fullName: string;
  speciality: string;
}) {
  return (
    <div className={styles['teacher-card']}>
      <div className={styles['teacher-card-image-wrapper']}>
        <Image src={image} alt="Picture of the teacher" fill style={{ objectFit: 'cover' }} />
      </div>
      <div className={styles['teacher-card-details']}>
        <p className={styles['teacher-card-details-direction']}>{speciality}</p>
        <h3>{fullName}</h3>
      </div>
    </div>
  );
}

function ArrowLeftIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="22" viewBox="0 0 35 22" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.5 11C34.5 10.6906 34.3721 10.3939 34.1444 10.1752C33.9167 9.9564 33.6078 9.8335 33.2858 9.8335L4.64748 9.8335L12.2897 2.49386C12.5177 2.27482 12.6458 1.97774 12.6458 1.66798C12.6458 1.35821 12.5177 1.06113 12.2897 0.842093C12.0617 0.623055 11.7525 0.500002 11.43 0.500002C11.1076 0.500002 10.7984 0.623055 10.5704 0.842093L0.856719 10.1741C0.743645 10.2825 0.653932 10.4112 0.59272 10.5529C0.531508 10.6946 0.5 10.8466 0.5 11C0.5 11.1534 0.531508 11.3054 0.59272 11.4471C0.653932 11.5888 0.743645 11.7175 0.856719 11.8259L10.5704 21.1579C10.6833 21.2664 10.8173 21.3524 10.9648 21.4111C11.1123 21.4698 11.2704 21.5 11.43 21.5C11.7525 21.5 12.0617 21.3769 12.2897 21.1579C12.5177 20.9389 12.6458 20.6418 12.6458 20.332C12.6458 20.0223 12.5177 19.7252 12.2897 19.5061L4.64748 12.1665L33.2858 12.1665C33.6078 12.1665 33.9167 12.0436 34.1444 11.8248C34.3721 11.6061 34.5 11.3094 34.5 11Z"
        fill="#9B71B3"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="35" height="22" viewBox="0 0 35 22" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.499999 11C0.499999 11.3094 0.627921 11.6061 0.855632 11.8248C1.08334 12.0436 1.39218 12.1665 1.71421 12.1665L30.3525 12.1665L22.7103 19.5061C22.4823 19.7252 22.3542 20.0223 22.3542 20.332C22.3542 20.6418 22.4823 20.9389 22.7103 21.1579C22.9383 21.3769 23.2475 21.5 23.57 21.5C23.8924 21.5 24.2016 21.3769 24.4296 21.1579L34.1433 11.8259C34.2564 11.7175 34.3461 11.5888 34.4073 11.4471C34.4685 11.3054 34.5 11.1534 34.5 11C34.5 10.8466 34.4685 10.6946 34.4073 10.5529C34.3461 10.4112 34.2564 10.2825 34.1433 10.1741L24.4296 0.842091C24.3167 0.733634 24.1827 0.647602 24.0352 0.588906C23.8877 0.53021 23.7296 0.499999 23.57 0.499999C23.2475 0.499999 22.9383 0.623053 22.7103 0.842091C22.4823 1.06113 22.3542 1.35821 22.3542 1.66798C22.3542 1.97774 22.4823 2.27482 22.7103 2.49386L30.3525 9.8335L1.71421 9.83349C1.39218 9.83349 1.08334 9.95639 0.855632 10.1752C0.627921 10.3939 0.499999 10.6906 0.499999 11Z"
        fill="#9B71B3"
      />
    </svg>
  );
}
