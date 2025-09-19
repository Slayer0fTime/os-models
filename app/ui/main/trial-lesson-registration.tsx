"use client";

import {useEffect, useMemo, useState} from "react";
import useSWR from "swr";
import {roboto} from "../fonts";
import styles from "./main.module.css";

interface Slot { city: string; date: string; time: string; }

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function TrialLessonRegistrationSection() {
  const { data, error, isLoading, isValidating, mutate } = useSWR<Slot[]>("/api/slots", fetcher, {
    refreshInterval: 60_000,
    revalidateOnFocus: false,
  });

  const slots = useMemo(() => Array.isArray(data) ? data : [], [data]);
  const noSlots = !isLoading && !error && slots.length === 0;

  const [modelName, setModelName] = useState("");
  const [modelAge, setModelAge] = useState("");
  const [modelSurname, setModelSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const cities = useMemo(
    () => Array.from(new Set(slots.map((s) => s.city))),
    [slots]
  );
  const dates = useMemo(
    () => Array.from(new Set(slots.filter((s) => s.city === selectedCity).map((s) => s.date))),
    [slots, selectedCity]
  );
  const times = useMemo(
    () => Array.from(new Set(slots.filter((s) => s.city === selectedCity && s.date === selectedDate).map((s) => s.time))),
    [slots, selectedCity, selectedDate]
  );

  useEffect(() => {
    if (!cities.includes(selectedCity) && cities.length > 0) {
      setSelectedCity(cities[0]);
    }
  }, [cities, selectedCity]);
  useEffect(() => {
    if (!dates.includes(selectedDate)) {
      setSelectedDate(dates[0] || "");
    }
  }, [dates, selectedDate]);
  useEffect(() => {
    if (!times.includes(selectedTime)) {
      setSelectedTime(times[0] || "");
    }
  }, [times, selectedTime]);

  const phoneRegex = /^\+?[0-9]{7,15}$/; // Simple regex checking (E.164 like)

  async function handleRegistration(e: React.FormEvent) {
    e.preventDefault();
    setFormMessage(null);

    if (!selectedCity || !selectedDate || !selectedTime) {
      setFormMessage({ type: 'error', text: "Будь ласка, оберіть місто, дату та час." });
      return;
    }
    if (!modelName || !modelAge || !modelSurname || !phoneRegex.test(phoneNumber)) {
      setFormMessage({ type: 'error', text: "Будь ласка, заповніть всі поля коректно." });
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          modelName, modelAge, modelSurname, phoneNumber,
          city: selectedCity, date: selectedDate, time: selectedTime,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to register for trial lesson");
      }

      setFormMessage({ type: 'success', text: "Ви успішно записані на пробне заняття!" });

      setModelName("");
      setModelAge("");
      setModelSurname("");
      setPhoneNumber("");
    } catch (err: any) {
        console.error(err);
        setFormMessage({ type: 'error', text: err.message || "Сталася помилка при записі. Спробуйте ще раз." });
    } finally {
        setIsSubmitting(false);
        await mutate();
    }
  }

  return (
    <section className={styles.section}>
      <div className={styles["registration-trial-lesson-container"]}>
        <div className={styles["registration-trial-lesson"]}>
          <div className={styles["registration-trial-lesson-card"]}>
            <div className={styles["registration-trial-lesson-card-header"]}>
              <h3>Запишись на пробне заняття</h3>
              <b>Безкоштовно</b>
            </div>

            {isLoading ? (
              <p>Завантаження…</p>
            ) : error ? (
              <p className={styles["no-slots-message"]}>Не вдалося завантажити слоти. Спробуйте пізніше.</p>
            ) : noSlots ? (
              <p className={styles["no-slots-message"]}>
                На жаль, наразі відсутні вільні місця. Слідкуйте за оновленнями розкладу або зв’яжіться з адміном.
              </p>
            ) : (
              <form onSubmit={handleRegistration} className={styles["registration-trial-lesson-card-model-info"]}>
                <InputField value={modelName} onChange={setModelName} placeholder="Ім'я моделі" />
                <InputField value={modelAge} onChange={setModelAge} placeholder="Вік моделі" />
                <InputField value={modelSurname} onChange={setModelSurname} placeholder="Прізвище моделі" />
                <InputField value={phoneNumber} onChange={setPhoneNumber} placeholder="Номер телефону" type="tel" />

                <p className={styles["registration-trial-lesson-card-timestamp"]}>
                  Оберіть дату та час заняття:
                </p>

                <div className={styles["timestamp-selects"]}>
                  <SelectField value={selectedCity} onChange={setSelectedCity} options={cities} ariaLabel="Місто" />
                  {dates.length > 0 && (
                    <SelectField value={selectedDate} onChange={setSelectedDate} options={dates} ariaLabel="Дата" />
                  )}
                  {times.length > 0 && (
                    <SelectField value={selectedTime} onChange={setSelectedTime} options={times} ariaLabel="Час" />
                  )}
                </div>

                {formMessage && (
                  <p className={`mt-4 text-center font-semibold ${formMessage.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                    {formMessage.text}
                  </p>
                )}

                <button
                  className={styles["registration-trial-lesson-button"]}
                  disabled={!selectedCity || !selectedDate || !selectedTime || isValidating}
                  type="submit"
                >
                  {isSubmitting ? "Записуємо..." : (isValidating ? "Оновлюємо…" : "Записатись")}
                </button>
              </form>
            )}
          </div>
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

function SelectField({ value, onChange, options, ariaLabel }: { value: string; onChange: (v: string) => void; options: string[]; ariaLabel: string; }) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)} aria-label={ariaLabel}>
      {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  );
}

function InputField({ value, onChange, placeholder, type = "text" }: { value: string; onChange: (v: string) => void; placeholder: string; type?: string; }) {
  return (
    <input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} type={type} />
  );
}
