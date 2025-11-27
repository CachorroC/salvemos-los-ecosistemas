'use client';

import { useFormActionContext } from '#@/app/context/form-action-context';
import styles from '#@/styles/form-styles.module.css';

function formatDateToYYYYMMDD(
  date : Date
) {
  const year = date.getFullYear();

  const month = String(
    date.getMonth() + 1
  )
    .padStart(
      2, '0'
    ); // Months are 0-indexed, so add 1

  const day = String(
    date.getDate()
  )
    .padStart(
      2, '0'
    );

  return `${ year }-${ month }-${ day }`;
}

export function ArticleForm() {
  const {
    formState, formAction, isFormPending
  } = useFormActionContext();

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.formTitle}>Nuevo Post</h1>
      <form action={formAction}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>
            id
            <input
              className={styles.formInput}
              type="number"
              name="id"
              defaultValue={formState.id}
            />
          </label>

          <label className={styles.formLabel}>
            titulo
            <input
              className={styles.formInput}
              type="text"
              name="title"
              defaultValue={formState.title}
            />
          </label>
        </div>
        <label className={styles.formLabel}>
          descripción
          <input
            className={styles.formInput}
            name="description"
            type="text"
            defaultValue={formState.description}
          />
        </label>
        <label className={styles.formLabel}>
          content
          <textarea
            className={styles.formTextarea}
            name="content"
            defaultValue={formState.content}
          />
        </label>
        <label className={styles.formLabel}>
          date
          <input
            className={styles.formTextarea}
            name="date"
            type="date"
            defaultValue={formatDateToYYYYMMDD(
              formState.date
            )}
          />
        </label>
        <label className={styles.formLabel}>
          url de la imagen
          <input
            className={styles.formInput}
            name="urlToImage"
            type="text"
            defaultValue={formState.urlToImage}
          />
        </label>
        <button
          type="submit"
          className={styles.submitBtn}
        >
          <span className={'material-symbols-outlined'}>
            {isFormPending
              ? 'hourglass_bottom'
              : 'send'}
          </span>
        </button>
        {isFormPending
          ? 'Loading...'
          : 'enviada'}
      </form>
    </div>
  );
}
