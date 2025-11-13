'use client';

import { useFormActionContext } from '#@/app/context/form-action-context';
import styles from '#@/styles/form-styles.module.css';
import { type } from '../../../../.next/dev/types/routes';

export function ArticleForm () {
  const {
    formState,
    formAction,
    isFormPending
  } = useFormActionContext();

  return ( <div
    className={styles.formContainer}
  >
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
          className={styles.formTextarea}
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
          defaultValue={formState.date.toISOString()}
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
  </div> );

}