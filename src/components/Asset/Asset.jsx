/* eslint-disable react/prop-types */
import style from './style.module.scss';

export const Asset = ({ item }) => {
  return (
    <div className={style.container}>
      {item.img}
      <h3 className={style.title}>{item.title}</h3>
      <p className={style.text}>{item.text}</p>
    </div>
  );
};
