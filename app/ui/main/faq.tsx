'use client';

import { faqItems } from '@/app/lib/data/faq';
import styles from './main.module.css';
import clsx from 'clsx';
import { useState } from 'react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>();

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className={styles['section']}>
      <div className={clsx('container', styles['section-content'])}>
        <div className={styles['section-title']}>
          <h2>Часті питання</h2>
        </div>
        <div className={styles['faq-section-content']}>
          {faqItems.map(({ question, answer }, index) => {
            const isOpen = index === openIndex;
            return (
              <div key={index} className={clsx(styles['faq-card'], { [styles.active]: isOpen })}>
                <div className={styles['faq-card-header']}>
                  <h3>{question}</h3>
                  <button className={styles['faq-card-btn']} onClick={() => toggle(index)}>
                    <ChevronIcon isOpen={isOpen} />
                  </button>
                </div>
                <div className={clsx(styles['faq-card-answer'], { [styles.active]: isOpen })}>
                  <p>{answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg width="32" height="15" viewBox="0 0 32 15" fill="none">
      <path
        d={isOpen ? 'M31 13.25L16 1.75L1 13.25' : 'M1 1.75L16 13.25L31 1.75'}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
