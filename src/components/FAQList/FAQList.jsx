import { FAQ } from '@data/data';
import styles from './style.module.scss';
import { FAQItem } from '../FAQItem/FAQItem';

export const FAQList = () => {
  return (
    <div className={styles.container}>
      {FAQ.map((item, index) => (
        <FAQItem item={item} key={index} />
      ))}
    </div>
  );
};
