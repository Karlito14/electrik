/* eslint-disable react/prop-types */
import style from './style.module.scss';

export const SelectField = ({
  label,
  id,
  value,
  onChange,
  error,
}) => (
  <div className={style.field}>
    <label htmlFor={id}>{label}</label>
    <select name={id} id={id} value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">Choisir une option</option>
        <option value="urgence">Urgence</option>
        <option value="reparation">Réparation</option>
        <option value="installation">Installation</option>
    </select>
    {error && (
      <span id={`${id}-error`} className={style.error}>
        {error}
      </span>
    )}
  </div>
);