import { ASSETS } from '@data/data.jsx';
import style from './style.module.scss';
import { Asset } from '@components/Asset/Asset';

export const AssetList = () => {
  return (
    <div className={style.container}>
      {ASSETS.map((item, index) => (
        <Asset key={index} item={item} />
      ))}
    </div>
  );
};
