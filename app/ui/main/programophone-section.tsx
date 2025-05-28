'use client';

import { useState, useRef } from 'react';
import styles from './main.module.css';
import { programophoneVideos } from '@/app/lib/data/programophone';
import clsx from 'clsx';
import Image from 'next/image';

export default function ProgramophoneSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const currentVideo = programophoneVideos[currentIndex];
  const prevIndex = (currentIndex - 1 + programophoneVideos.length) % programophoneVideos.length;
  const nextIndex = (currentIndex + 1) % programophoneVideos.length;

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleSelectType = (index: number) => {
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex);
  };

  const handleNext = () => {
    setCurrentIndex(nextIndex);
  };

  return (
    <section className={styles['section']}>
      <div className={clsx(styles['section-content'], 'container')}>
        <div className={styles['section-title']}>
          <h2>Програмофон</h2>
        </div>

        <div className={styles['programophone-section-content']}>
          <div className={styles['programophone-section-video']}>
            <Image
              src={programophoneVideos[prevIndex].poster}
              width={140}
              height={384}
              className={styles['programophone-section-side-video']}
              alt="Previous poster"
            />
            <div className={styles['programophone-section-video-card']}>
              <video
                ref={videoRef}
                src={currentVideo.src}
                className={styles['video-card-video']}
                muted
                loop
                preload="auto"
                playsInline
              />
              <div className={styles['video-controls']}>
                <button onClick={handlePrev}>
                  <PrevIcon />
                </button>
                <button onClick={handlePlay}>{<PlayIcon />}</button>
                <button onClick={handleNext}>
                  <NextIcon />
                </button>
              </div>
            </div>
            <Image
              src={programophoneVideos[nextIndex].poster}
              width={140}
              height={384}
              className={styles['programophone-section-side-video']}
              alt="Next poster"
            />
          </div>

          <div className={styles['programophone-section-types']}>
            {programophoneVideos.map((video, index) => (
              <button
                key={index}
                className={clsx(styles['programophone-section-type'], {
                  [styles.selected]: index === currentIndex,
                })}
                onClick={() => handleSelectType(index)}>
                <span>{video.type}</span>
                <ArrowRight />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PrevIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
      <g opacity="0.8">
        <path
          d="M20.75 18.9361C20.75 19.2456 20.6649 19.5491 20.504 19.8134C20.343 20.0778 20.1125 20.2928 19.8376 20.435C19.5627 20.5771 19.254 20.6409 18.9453 20.6194C18.6366 20.5979 18.3397 20.492 18.0871 20.3131L6.27463 11.938C6.0552 11.7829 5.876 11.5775 5.75195 11.3391C5.6279 11.1007 5.56257 10.8362 5.56142 10.5674C5.56026 10.2987 5.62331 10.0336 5.74531 9.79411C5.8673 9.55466 6.04473 9.3478 6.26281 9.19076L18.0753 0.690828C18.3273 0.50906 18.6246 0.400396 18.9344 0.376814C19.2442 0.353233 19.5546 0.415647 19.8312 0.55718C20.1078 0.698713 20.3399 0.913868 20.5021 1.17893C20.6642 1.44399 20.75 1.74867 20.75 2.05939L20.75 18.9361ZM0.5 19.7832C0.5 20.007 0.588894 20.2216 0.747128 20.3798C0.905361 20.5381 1.11997 20.627 1.34375 20.627C1.56753 20.627 1.78214 20.5381 1.94037 20.3798C2.09861 20.2216 2.1875 20.007 2.1875 19.7832L2.1875 1.2207C2.1875 0.996926 2.09861 0.782313 1.94037 0.624079C1.78214 0.465845 1.56753 0.376951 1.34375 0.376951C1.11998 0.376951 0.905363 0.465845 0.747129 0.624079C0.588896 0.782313 0.500002 0.996925 0.500002 1.2207L0.5 19.7832Z"
          fill="#78379E"
        />
      </g>
    </svg>
  );
}

function NextIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="27" viewBox="0 0 28 27" fill="none">
      <g opacity="0.8">
        <path
          d="M3.875 5.06588C3.87501 4.75639 3.96013 4.45287 4.12105 4.18852C4.28196 3.92416 4.51248 3.70914 4.78738 3.56699C5.06228 3.42484 5.37098 3.36102 5.67972 3.38251C5.98845 3.40401 6.28533 3.50999 6.53788 3.68888L18.3504 12.0639C18.5698 12.2191 18.749 12.4244 18.8731 12.6628C18.9971 12.9012 19.0624 13.1658 19.0636 13.4345C19.0647 13.7033 19.0017 13.9684 18.8797 14.2078C18.7577 14.4473 18.5803 14.6542 18.3622 14.8112L6.54969 23.3111C6.29769 23.4929 6.00039 23.6016 5.69057 23.6251C5.38076 23.6487 5.07044 23.5863 4.79383 23.4448C4.51722 23.3032 4.28506 23.0881 4.12293 22.823C3.96081 22.558 3.87501 22.2533 3.875 21.9426V5.06588ZM24.125 4.21875C24.125 3.99497 24.0361 3.78036 23.8779 3.62213C23.7196 3.4639 23.505 3.375 23.2812 3.375C23.0575 3.375 22.8429 3.4639 22.6846 3.62213C22.5264 3.78036 22.4375 3.99497 22.4375 4.21875V22.7812C22.4375 23.005 22.5264 23.2196 22.6846 23.3779C22.8429 23.5361 23.0575 23.625 23.2812 23.625C23.505 23.625 23.7196 23.5361 23.8779 23.3779C24.0361 23.2196 24.125 23.005 24.125 22.7812V4.21875Z"
          fill="#78379E"
        />
      </g>
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
      <g opacity="0.8">
        <path
          d="M19.5 10.5C19.5007 10.7742 19.4255 11.044 19.2818 11.283C19.138 11.522 18.9305 11.7221 18.6795 11.8639L3.12545 20.7622C2.86322 20.9124 2.56287 20.9944 2.25542 20.9997C1.94798 21.005 1.64459 20.9335 1.37659 20.7925C1.11114 20.6537 0.890014 20.4513 0.73595 20.2061C0.581885 19.9609 0.500444 19.6817 0.5 19.3973V1.60269C0.500444 1.31828 0.581885 1.03911 0.73595 0.793894C0.890014 0.548678 1.11114 0.346263 1.37659 0.207465C1.64459 0.0664776 1.94798 -0.00504736 2.25542 0.000276971C2.56287 0.0056013 2.86322 0.087582 3.12545 0.237752L18.6795 9.13608C18.9305 9.27789 19.138 9.47803 19.2818 9.71704C19.4255 9.95604 19.5007 10.2258 19.5 10.5Z"
          fill="#78379E"
        />
      </g>
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.999106 7.99965C0.999106 8.13226 1.05178 8.25944 1.14555 8.35321C1.23932 8.44698 1.3665 8.49965 1.49911 8.49965L13.2921 8.49965L10.1451 11.6457C10.0512 11.7395 9.99847 11.8669 9.99847 11.9997C9.99847 12.1324 10.0512 12.2598 10.1451 12.3537C10.239 12.4475 10.3663 12.5003 10.4991 12.5003C10.6319 12.5003 10.7592 12.4475 10.8531 12.3537L14.8531 8.35365C14.8997 8.30721 14.9366 8.25203 14.9618 8.19129C14.987 8.13054 15 8.06542 15 7.99965C15 7.93389 14.987 7.86877 14.9618 7.80802C14.9366 7.74728 14.8997 7.6921 14.8531 7.64565L10.8531 3.64565C10.8066 3.59917 10.7514 3.56229 10.6907 3.53713C10.63 3.51197 10.5649 3.49902 10.4991 3.49902C10.3663 3.49902 10.239 3.55177 10.1451 3.64565C10.0512 3.73954 9.99847 3.86688 9.99847 3.99965C9.99847 4.13243 10.0512 4.25977 10.1451 4.35365L13.2921 7.49965L1.49911 7.49965C1.3665 7.49965 1.23932 7.55233 1.14555 7.6461C1.05178 7.73987 0.999106 7.86705 0.999106 7.99965Z"
      />
    </svg>
  );
}
