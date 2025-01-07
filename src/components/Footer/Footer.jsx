import styles from './style.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <h2>Electrik</h2>
        <address>6 rue Hector Berlioz, 75014 Paris</address>
      </div>
      <div className={styles.social_medias}>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-square-instagram"></i>
        <i className="fa-brands fa-youtube"></i>
      </div>
    </footer>
  );
};
