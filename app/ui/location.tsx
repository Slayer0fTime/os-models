'use client';

import { locations } from '@/app/lib/data/contacts';
import styles from '@/app/ui/location.module.css';
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

export default function Location() {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  return (
    <>
      <div className={styles['city-list']}>
        {locations.map((location) => (
          <button
            key={location.city}
            className={clsx({ [styles.active]: selectedLocation.city === location.city })}
            onClick={() => setSelectedLocation(location)}>
            {location.city}
          </button>
        ))}
      </div>

      <div className={styles['location-container']}>
        <a className={styles['location-map']} target="_blank" href={selectedLocation.map.href}>
          <Image
            src={selectedLocation.map.image}
            alt={selectedLocation.city}
            fill
            style={{ objectFit: 'cover' }}
          />
        </a>

        <div className={styles['location-address']}>
          <p>{selectedLocation.street}</p>
          <p>{selectedLocation.metro}</p>
        </div>
      </div>
    </>
  );
}
