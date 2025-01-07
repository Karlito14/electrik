/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './style.module.scss';

export const FAQItem = ({ item }) => {
  const [responseDisplay, setResponseDisplay] = useState(false);

  const styleResponse = () => {
    const style = {
      opacity: responseDisplay ? '1' : '0',
      position: responseDisplay ? 'relative' : 'absolute',
      top: responseDisplay ? '0' : '-180px',
    };

    return style;
  };

  return (
    <>
      <div
        className={styles.title}
        onClick={() => setResponseDisplay(!responseDisplay)}
      >
        <h3 style={{fontWeight: responseDisplay ? 700: 500}}>{item.question}</h3>
        <i
          className="fa-solid fa-chevron-down"
          style={{ transform: responseDisplay ? 'rotate(180deg)' : '' }}
        ></i>
      </div>

      <p className={styles.response} style={styleResponse()}>
        {item.response}
      </p>
    </>
  );
};
