import { roboto } from '../fonts';
import styles from './prices.module.css';

export default function PaymentCard({
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
    <div className={styles['payment-card']}>
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
