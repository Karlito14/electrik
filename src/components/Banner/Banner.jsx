import background from '@assets/tableau-electrique.jpg';
import style from './style.module.scss';

export const Banner = () => {
  return (
    <div
      className={style.banner}
      style={{ backgroundImage: `url(${background})` }}
    >
        <h2 className={style.title}>Electriciens sur Paris</h2>
        <h3 className={style.subtitle}>
          Dépannages et installations sur Paris et sa Banlieue
        </h3>
    </div>
  );
};
