/* eslint-disable react/prop-types */
import style from './style.module.scss';

export const InputField = ({
  label,
  id,
  value,
  onChange,
  error,
  type = 'text',
}) => (
  <div className={style.field}>
    <label htmlFor={id}>{label}</label>
    <input
      id={id}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
    {error && (
      <span id={`${id}-error`} className={style.error}>
        {error}
      </span>
    )}
  </div>
);
