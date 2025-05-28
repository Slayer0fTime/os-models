import { getEventById } from '@/app/lib/data/events';
import styles from '@/app/ui/events/event.module.css';
import { roboto } from '@/app/ui/fonts';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const event = getEventById((await params).id);

  if (!event) {
    return notFound();
  }

  return (
    <main className={styles['main']}>
      <section className={`container ${styles['section']}`}>
        <h2 className={styles['section-title']}>{event.title}</h2>
        <div className={styles['event-container']}>
          <div className={styles['event-image-wrapper']}>
            <Image
              src={event.image}
              alt="event-photo"
              className={styles['event-image']}
              fill
              objectFit="cover"
            />
          </div>
          <div className={styles['event-info']}>
            <p className={styles['event-description']}>{event.description}</p>
            <span className={`${roboto.className} ${styles['event-date']}`}>{event.date}</span>
          </div>
        </div>
        {event.gallery && (
          <>
            <h3 className={styles['event-gallery-title']}>Фототека</h3>
            <div className={styles['event-gallery']}>
              {event.gallery.map((src, index) => (
                <Image key={index} src={src} alt="event-photo" width={200} height={150} />
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  );
}
