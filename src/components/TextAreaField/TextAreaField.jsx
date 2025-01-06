/* eslint-disable react/prop-types */
import style from './style.module.scss';

export const TextAreaField = ({
  label,
  id,
  value,
  onChange,
  error,
}) => (
  <div className={style.field}>
    <label htmlFor={id}>{label}</label>
    <textarea
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={5}
      cols={33}
    ></textarea>
    {error && (
      <span id={`${id}-error`} className={style.error}>
        {error}
      </span>
    )}
  </div>
);
